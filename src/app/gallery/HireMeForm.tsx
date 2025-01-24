"use client";

import { Flex } from "@/once-ui/components";

export default function HireMe() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Your message has been sent successfully!");
    };

    return (
        <Flex fillWidth alignItems="center" justifyContent="center" direction="column" padding="8">
            <h1 style={{ color: "white", marginBottom: "16px" }}>Hire Me</h1>
            <p style={{ color: "white", textAlign: "center", marginBottom: "24px" }}>
                If you'd like to work together or have any inquiries, feel free to get in touch!
            </p>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    width: "100%",
                    maxWidth: "400px",
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    style={{
                        padding: "12px",
                        fontSize: "16px",
                        border: "1px solid #444",
                        borderRadius: "8px",
                        width: "100%",
                        backgroundColor: "#000", // Black background
                        color: "#fff", // White text
                        outline: "none",
                    }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    style={{
                        padding: "12px",
                        fontSize: "16px",
                        border: "1px solid #444",
                        borderRadius: "8px",
                        width: "100%",
                        backgroundColor: "#000", // Black background
                        color: "#fff", // White text
                        outline: "none",
                    }}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    style={{
                        padding: "12px",
                        fontSize: "16px",
                        border: "1px solid #444",
                        borderRadius: "8px",
                        width: "100%",
                        backgroundColor: "#000", // Black background
                        color: "#fff", // White text
                        resize: "none",
                        outline: "none",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "12px",
                        fontSize: "16px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    Send Message
                </button>
            </form>
        </Flex>
    );
}
