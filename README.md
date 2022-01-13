**Environment**

```bash
Angular CLI: 10.2.4
Node: 12.16.3
```

**Run**

```bash
ng serve
```

Try Demo:
https://stackblitz.com/edit/angular-ivy-rw41sd?file=src/app/app.component.ts


**Test Explain**

We have a simple chat app like Instagram DM.

In this app, there are two users, “ME(you)” and “RYAN(counterpart)”. 

“RYAN” sends a new message every 10 seconds, and you(“ME”) can send a new message by typing text and clicking the send button.

When any new message has been added, `onNewMessageAddedCallback()` inside `chatroom.component.ts` is called with a new message object.

Now, we want to upgrade this app’s user interface, just like Instagram DM or WhatsApp:

- **Rule 1:** If consecutive messages are from the same sender, display only one username at the top of the first message.
- **Rule 2:** If consecutive messages are having the same minute time, display only one minute at the bottom of the last message.
- **Rule 2 has priority over Rule 1 :** If consecutive messages are from the same sender but having different minute time, display them seperately.



See the attached image below:
![[Output Example]](https://ik.imagekit.io/gdmmclm0lkd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-01-13_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_9.05.29_uVluDRbvd1D.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642075545452)


**Constraints**

- If you click the “load previous message” button, 10 past messages would be loaded and they should follow the same rule as well. (`loadPreviousMessages()` can be called only once)
- You can change any codes except for the `chat.service.ts` .
- Try not to loop through the whole message array every time.
- Changing design/css is not required.
