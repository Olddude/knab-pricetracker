import nodemailer from "nodemailer";
import emailService from "../services/emailService";

jest.mock("nodemailer", () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn(() => Promise.resolve(true)),
  })),
}));

describe("EmailService", () => {
  it("should send an email", async () => {
    const to = "info@pieterboerboom.nl";
    const subject = "Test Price Tracker";
    const html = "<p>Test Price Traking Email Thing</p>";

    await emailService.sendEmail(to, subject, html);

    expect(nodemailer.createTransport).toHaveBeenCalledTimes(1);
    const mockTransporter = (nodemailer.createTransport as jest.Mock).mock;
    expect(mockTransporter.results[0].value.sendMail).toHaveBeenCalledTimes(1);
    expect(mockTransporter.results[0].value.sendMail).toHaveBeenCalledWith({
      from: process.env.GMAIL_USER,
      to,
      subject,
      html,
    });
  });

  it("should handle errors when sending an email", async () => {
    const error = new Error("Failed to send email");
    (nodemailer.createTransport as jest.Mock).mockReturnValueOnce({
      sendMail: jest.fn(() => Promise.reject(error)),
    });

    try {
      await emailService.sendEmail(
        "test@example.com",
        "Test Subject",
        "<p>Test Email</p>"
      );
    } catch (e) {
      expect(e).toEqual(error);
    }
  });

});
