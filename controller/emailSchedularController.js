
import { followUp1MailDelay, followUp2MailDelay, initialMail2Delay, initialMailDelay } from "../config/cronsDelay.js";
import { transporter } from "../mail/mailSender.js";
import {
  getInitialEmailsToSend,
  getFollowUp1EmailsToSend,
  getFollowUp2EmailsToSend,
  getInitial2EmailsToSend,
  mailQueueGenerator,
  matchMailQueueUpdater,
} from "../services/emailSchedularService.js";


import {
  initialMailTemplate,
  followUP1MailTemplate,
  followUP2MailTemplate,
  initialMail2Template,
} from "../services/emailTemplate.js";

import { getCurrentDateInFormat } from "../utils/customFunctions.js";

export async function sendInitialCronjobsMails(req, res) {
  try {
    const currentDate = getCurrentDateInFormat();

    const initialMails = await getInitialEmailsToSend();
   

    if (initialMails.length > 0) {
      await Promise.all(
        initialMails.map(async (email) => {
          // console.log(email)
          await new Promise((resolve) => setTimeout(resolve, initialMailDelay));

          // const emailThread = [
          //   {
          //     sentAt: email.send,
          //     from: 'sender@example.com',
          //     body: 'first email with backquote',
          //   },]

          const initialMailOptions = {
            from: "test@ayventures.in",
            cc: "test.ayventure@gmail.com",
            to: email.investorId[0].employees[0].email,
            subject: `Investment Opportunity in ${email.startUpId[0].companyName} from AY Ventures`,
            html: await initialMailTemplate(
              email.investorId[0],
              email.startUpId[0]
            ),
            headers: {
              "X-Email-Chain-Id": "customtokensend", // Add custom header
            },
          };
          try {
            const initialInfo = await transporter.sendMail(initialMailOptions);
            await mailQueueGenerator(email, "primary mail");
            await matchMailQueueUpdater({
              emailQueueId: email.emailId,
              lastinitalMail: currentDate,
              primaryEmail: true,
              messageId: initialInfo.messageId,
            });
          } catch (error) {
            throw error;
            console.log(error);
          }
        })
      );
    }

    const initial2Mails = await getInitial2EmailsToSend();
    if (initial2Mails.length > 0) {
      await Promise.all(
        initial2Mails.map(async (email) => {

          if (email.investorId[0].employees[1]) {
            await new Promise((resolve) => setTimeout(resolve, initialMail2Delay));
            const initial2MailOptions = {
              from: "test@ayventures.in",
              cc: "test.ayventure@gmail.com",
              to: email.investorId[0].employees[1].email,
              subject: `Investment Opportunity in ${email.startUpId[0].companyName} from AY Ventures`,
              html: await initialMail2Template(
                email.investorId[0],
                email.startUpId[0]
              ),
              headers: {
                "X-Email-Chain-Id": "customtokensend", // Add custom header
              },
            };
            const initial2Info = await transporter.sendMail(
              initial2MailOptions
            );
            mailQueueGenerator(email, "primary mail2");
            matchMailQueueUpdater({
              emailQueueId: email.emailId,
              lastinitalMail: currentDate,
              messageId: initial2Info.messageId,
            });
          }
        })
      );
    }
console.log(initialMails.length,initial2Mails.length)
    res.json({ message: "mail sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
}

export async function sendFollowUpCronjobsMails(req, res) {
  try {
    const currentDate = getCurrentDateInFormat();
    const followUp1Mails = await getFollowUp1EmailsToSend();

    if (followUp1Mails.length > 0) {
      await Promise.all(
        followUp1Mails.map(async (email) => {
          await new Promise((resolve) => setTimeout(resolve, followUp1MailDelay));
          const followUpMailOptions = {
            from: "test@ayventures.in",
            cc: "test.ayventure@gmail.com",
            to: email.investorId[0].employees[0].email,
            subject: `Investment Opportunity in ${email.startUpId[0].companyName} from AY Ventures`,
            html: await followUP1MailTemplate(
              email.investorId[0],
              email.startUpId[0]
            ),
            references: [email.emailQueue.send.messageIds], // Reference initial email as an array
            "In-Reply-To": email.emailQueue.send.messageIds, // Reply to initial email
            headers: {
              "X-Email-Chain-Id": "customtokensend", // Add custom header
            },
          };
          const followUpInfo = await transporter.sendMail(followUpMailOptions);
          mailQueueGenerator(email, "followUp1");
          matchMailQueueUpdater({
            emailQueueId: email.emailId,
            
            followUpEmail: true,
            messageId: followUpInfo.messageId,
          });
        })
      );
    }
console.log(followUp1Mails.length)
    res.json({ message: "mail sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
}


export async function sendFollowUp2CronjobsMails(req, res) {
  try {
   
    const followUp2Mails = await getFollowUp2EmailsToSend();
    if (followUp2Mails.length > 0) {
      await Promise.all(
        followUp2Mails.map(async (email) => {
          await new Promise((resolve) => setTimeout(resolve, followUp2MailDelay));
          const followUpMailOptions = {
            from: "test@ayventures.in",
            cc: "test.ayventure@gmail.com",
            to: email.investorId[0].employees[0].email,
            subject: `Investment Opportunity in ${email.startUpId[0].companyName} from AY Ventures`,
            html: await followUP2MailTemplate(
              email.investorId[0],
              email.startUpId[0]
            ),
            references: [email.emailQueue.send.messageIds], // Reference initial email as an array
            "In-Reply-To": email.emailQueue.send.messageIds, // Reply to initial email
            headers: {
              "X-Email-Chain-Id": "customtokensend", // Add custom header
            },
          };
          const followUpInfo = await transporter.sendMail(followUpMailOptions);
          mailQueueGenerator(email, "followUp2");
          matchMailQueueUpdater({
            emailQueueId: email.emailId,
           
            messageId: followUpInfo.messageId,
          });
        })
      );
    }
console.log(followUp2Mails.length)
    res.json({ message: "mail sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
}
