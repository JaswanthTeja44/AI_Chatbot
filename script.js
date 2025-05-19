    document.getElementById("send-button").addEventListener("click", sendMessage);

    function sendMessage() {
      const input = document.getElementById("user-input");
      const message = input.value.trim();

      if (!message) {
        alert("Please enter a message.");
        return;
      }

      const chatBody = document.getElementById("chat-body");

      const userMessage = document.createElement("div");
      userMessage.className = "chat-message user";
      userMessage.textContent = message;
      chatBody.appendChild(userMessage);

      input.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;

      // Simulate AI response
      setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "chat-message bot";
        botMessage.textContent = generateBotReply(message);
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 500);
    }

    function generateBotReply(message) {
      const lower = message.toLowerCase();
      if (lower.includes("hello") || lower.includes("hi")) return "Hello! How can I assist you today?";
      if (lower.includes("what is your name") || lower.includes("name")) return "My name is Jaswanth AI";
      if (lower.includes("price")) return "Our products range from $10 to $500 depending on your needs.";
      if (lower.includes("help")) return "Sure, I'm here to help. What do you need assistance with?";
      if (lower.includes("support")) return "You can contact support 24/7 via this chat or email us.";
      if (lower.includes("refund")) return "Refunds are processed within 5-7 business days.";
      if (lower.includes("shipping")) return "We offer free shipping on orders over $50.";
      if (lower.includes("delivery")) return "Delivery usually takes 3-5 working days.";
      if (lower.includes("account")) return "You can manage your account settings from the profile page.";
      if (lower.includes("password")) return "You can reset your password from the login page.";
      if (lower.includes("location")) return "We're located in San Francisco, CA.";
      if (lower.includes("hours")) return "Our working hours are 9 AM - 6 PM, Monday to Friday.";
      if (lower.includes("contact")) return "You can reach us at support@example.com.";
      if (lower.includes("login")) return "Please use your registered email to login.";
      if (lower.includes("signup")) return "Signing up is easy and takes less than a minute!";
      if (lower.includes("cancel")) return "To cancel your order, go to your orders and select 'Cancel'.";
      if (lower.includes("feedback")) return "We appreciate your feedback! Please let us know your thoughts.";
      if (lower.includes("bug")) return "Sorry for the inconvenience. Our team is fixing it right now.";
      if (lower.includes("update")) return "You can update your app from the Play Store or App Store.";
      if (lower.includes("version")) return "The current version is 2.5.1 released in May 2025.";
      if (lower.includes("trial")) return "We offer a 14-day free trial for new users.";
      if (lower.includes("features")) return "We offer a range of AI-powered features. What are you looking for?";
      if (lower.includes("faq")) return "You can check our FAQ section for common queries.";
      if (lower.includes("reset")) return "Please confirm if you want to reset your settings.";
      if (lower.includes("plan")) return "We have Basic, Pro, and Enterprise plans available.";
      if (lower.includes("subscription")) return "Subscriptions auto-renew monthly. You can cancel anytime.";
      if (lower.includes("chatbot")) return "Yes! I'm your friendly AI chatbot.";
      if (lower.includes("ai")) return "AI helps automate tasks and provide insights quickly.";
      if (lower.includes("language")) return "I support English, Spanish, and French.";
      if (lower.includes("thanks") || lower.includes("thank you")) return "You're welcome! Let me know if you need anything else.";
      if (lower.includes("bye")) return "Goodbye! Have a great day.";
      return "I'm not sure about that. Can you please rephrase or provide more details?";
    }