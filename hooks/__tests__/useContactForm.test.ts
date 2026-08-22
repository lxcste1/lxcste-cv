import { act, renderHook } from "@testing-library/react";
import type { ChangeEvent, FormEvent } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import type { ContactFormLabels } from "@/types/contact";

const fetchMock = jest.fn();
Object.defineProperty(global, "fetch", { value: fetchMock, writable: true });

const LABELS: ContactFormLabels = {
  name: "Name",
  namePlaceholder: "Your name",
  email: "Email",
  emailPlaceholder: "you@example.com",
  subject: "Subject",
  subjectPlaceholder: "Subject",
  message: "Message",
  messagePlaceholder: "Your message",
  send: "Send",
  sending: "Sending",
  success: "Message sent",
  error: "Message failed",
};

describe("useContactForm", () => {
  afterEach((): void => {
    fetchMock.mockReset();
    jest.useRealTimers();
  });

  it("updates an individual form field", () => {
    const { result } = renderHook(() => useContactForm(LABELS));

    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "Test" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formData).toEqual({
      name: "Test",
      email: "",
      subject: "",
      message: "",
    });
  });

  it("submits the form and resets the success status", async () => {
    jest.useFakeTimers();
    fetchMock.mockResolvedValue({ ok: true } as Response);
    const { result } = renderHook(() => useContactForm(LABELS));

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: jest.fn(),
      } as FormEvent<HTMLFormElement>);
    });

    expect(fetchMock).toHaveBeenCalledWith("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", email: "", subject: "", message: "" }),
    });
    expect(result.current.status).toBe("success");
    expect(result.current.statusMessage).toBe(LABELS.success);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current.status).toBe("idle");
  });

  it("shows and resets an error status when the request fails", async () => {
    jest.useFakeTimers();
    fetchMock.mockRejectedValue(new Error("Network error"));
    const { result } = renderHook(() => useContactForm(LABELS));

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: jest.fn(),
      } as FormEvent<HTMLFormElement>);
    });

    expect(result.current.status).toBe("error");
    expect(result.current.statusMessage).toBe(LABELS.error);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current.status).toBe("idle");
  });
});
