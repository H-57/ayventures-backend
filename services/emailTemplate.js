export async function initialMailTemplate(investor, startup) {
  let emailTemplate = `
    <html>
    <head>
    <style>
        a {
            text-decoration: none;
        }
        footer p {
            margin: 2px;
            font-size: 10px;
        }
        #logo{
            max-width: 30vw;
        }
        img {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
    <body>
   <p>Dear ${investor.employees[0].first_name},</p>
<p>Greetings from AY Ventures.</p>
    <p>We are delighted to bring you an exclusive investment opportunity to invest in ${startup.currentRound} round of ${startup.companyName} ${(startup.location.country)? "from": null} ${startup.location?.state +", "}${startup.location?.country}.
    </p>
    <br>
    <p><strong>About the company:</strong></p>
    <p>${startup.aboutTheCompany}</p>
    <p><strong>Business Model:</strong></p>
    <p>${startup.businessModel}</p>
    <p><strong>Revenue:</strong>$${startup.revenue}</p>
    <p><strong>Traction:</strong></p>
    <p>${startup.traction}</p>
    <p><strong>Problem & Solution:</strong></p>
    <p>${startup.problemAndSolution}</p>
    <p><strong>USP & Competitors:<strong></p>
    <p>${startup.uSPAndCompetitors}</p>
    <p><strong>About the Team:<strong></p>
    <p>${startup.aboutTheTeam}</p>
    <p><strong>Market Size:</strong>$${startup.marketSize}</p>
    <p><strong>Investment Ask:</strong>$${startup.investmentAsk}</p>
    <p><strong>Valuation:</strong>$${startup.valuation}</p>
    <p><strong>Commitment:<strong></p>
    <p>${startup.commitments}</p>
    <p><strong>Previous Round:<strong></p>
    <p>${startup.previousRounds}</p>
    <p><strong>Pitch Deck:</strong><a href=${startup.pitchDeck}>${startup.pitchDeck}</a></p>
    <br>
    <br>
    <p>From AY Ventures Investment Team,</p>
    <footer style="display: flex; gap: 10px;">
    <div id="logo">
    <img src="https://res.cloudinary.com/dq75lhzky/image/upload/v1711977274/lnftqmwbfcf2vwevme6w.png" alt="logo">    
    </div>
    <div>
        <p>Mobile:  (+91) xxxxxxxxxx</p>
        <p>Email: <a href="mailto:deals@ayventures.in">deals@ayventures.in</a></p>
        <p>
            <a href="https://www.linkedin.com/company/ayventures">LinkedIn</a> |<a href="https://www.facebook.com/ayventuresdotin">Facebook</a>  |<a href="https://www.instagram.com/ayventuresdotin/">Instagram</a>| <a href="https://twitter.com/ayventuresdotin">X</a></p>
            <p><a href="https://ayventures.in/">Website</a></p>
            <p><a href="https://bit.ly/AYVProfile">Company Profile</a></p>
    </div>
        
    
    </footer>
   
   
    </body>
    </html>
    `;
  return emailTemplate;
}

export async function followUP1MailTemplate(investor, startup) {
  let emailTemplate = `
    <html>
    <head>
    <style>
        a {
            text-decoration: none;
        }
        footer p {
            margin: 2px;
            font-size: 10px;
        }
        #logo{
            max-width: 30vw;
        }
        img {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
    <body>
    <p>Dear ${investor.employees[0].first_name},</p>
    <p>Greetings from AY Ventures.</p>
    <p>We wanted to circle back regarding the investment opportunity we presented in ${startup.companyName}. With an impressive profile, ${startup.companyName} presents a compelling investment proposition.</p>
    <p>Despite the previous outreach, if you haven't had the chance to review this opportunity, we encourage you to take a closer look.</p>
    <p>If you have already reviewed ${startup.companyName}, we would be grateful to get some feedback so that we can bring more relevant companies for you in future that match your criteria.</p>
    <p>Thank you for your time and consideration.</p>
    <p>Regards,</p>
    <p>AY Ventures Investment Team</p>
    
    <footer style="display: flex; gap: 10px;">
    <div id="logo">
    <img src="https://res.cloudinary.com/dq75lhzky/image/upload/v1711977274/lnftqmwbfcf2vwevme6w.png" alt="logo">    
    </div>
    <div >
        <p>Mobile:  (+91) xxxxxxxxxx</p>
        <p>Email: <a href="mailto:deals@ayventures.in">deals@ayventures.in</a></p>
        <p>
            <a href="https://www.linkedin.com/company/ayventures">LinkedIn</a> |<a href="https://www.facebook.com/ayventuresdotin">Facebook</a>  |<a href="https://www.instagram.com/ayventuresdotin/">Instagram</a>| <a href="https://twitter.com/ayventuresdotin">X</a></p>
            <p><a href="https://ayventures.in/">Website</a></p>
            <p><a href="https://bit.ly/AYVProfile">Company Profile</a></p>
    </div>
        
    
    </footer>
   
    </style>
    </body>
    </html>
    `;
  return emailTemplate;
}

export async function followUP2MailTemplate(investor, startup) {
  let emailTemplate = `
    <html>
    <head>
    <style>
        a {
            text-decoration: none;
        }
        footer p {
            margin: 2px;
            font-size: 10px;
        }
        #logo{
            max-width: 30vw;
        }
        img {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
    <body>
    <p>Dear ${investor.employees[0].first_name},</p>
<p>Just circling back regarding ${startup.companyName} investment opportunity as we have yet to receive a response from you.</p>
<p>Would you be interested in revisiting this opportunity or please share if you require further details?</p>
<p>If you have already reviewed  ${startup.companyName}, we would be grateful to get some feedback so that we can bring more relevant companies for you in future that match your criteria.</p>
<p>Regards,</p>
<p>AY Ventures Investment Team</p>

<footer style="display: flex; gap: 10px;">
<div id="logo">
<img src="https://res.cloudinary.com/dq75lhzky/image/upload/v1711977274/lnftqmwbfcf2vwevme6w.png" alt="logo">    
</div>
<div >
    <p>Mobile:  (+91) xxxxxxxxxx</p>
    <p>Email: <a href="mailto:deals@ayventures.in">deals@ayventures.in</a></p>
    <p>
        <a href="https://www.linkedin.com/company/ayventures">LinkedIn</a> |<a href="https://www.facebook.com/ayventuresdotin">Facebook</a>  |<a href="https://www.instagram.com/ayventuresdotin/">Instagram</a>| <a href="https://twitter.com/ayventuresdotin">X</a></p>
        <p><a href="https://ayventures.in/">Website</a></p>
        <p><a href="https://bit.ly/AYVProfile">Company Profile</a></p>
</div>
    

</footer>

    </body>
    </html>
    `;
  return emailTemplate;
}

export async function initialMail2Template(investor, startup) {
    let emailTemplate = `
      <html>
      <head>
    <style>
        a {
            text-decoration: none;
        }
        footer p {
            margin: 2px;
            font-size: 10px;
        }
        #logo{
            max-width: 30vw;
        }
        img {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
      <body>
     <p>Dear ${investor.employees[1].first_name},</p>
  <p>Greetings from AY Ventures.</p>
      <p>We got in touch with ${investor.employees[0].first_name} from your firm but as we haven't received any response from ${investor.employees[0].first_name}, we wanted to circle back regarding the investment opportunity to invest in ${startup.currentRound} round of ${startup.companyName} ${(startup.location.country)? "from": null} ${startup.location?.state +", "}${startup.location?.country}.
      </p>
      <br>
      <p><strong>About the company:</strong></p>
      <p>${startup.aboutTheCompany}</p>
      <p><strong>Business Model:</strong></p>
      <p>${startup.businessModel}</p>
      <p><strong>Revenue:</strong>${startup.revenue}</p>
      <p><strong>Traction:</strong></p>
      <p>${startup.traction}</p>
      <p><strong>Problem & Solution:</strong></p>
      <p>${startup.problemAndSolution}</p>
      <p><strong>USP & Competitors:<strong></p>
      <p>${startup.uSPAndCompetitors}</p>
      <p><strong>About the Team:<strong></p>
      <p>${startup.aboutTheTeam}</p>
      <p><strong>Market Size:</strong>${startup.marketSize}</p>
      <p><strong>Investment Ask:</strong>${startup.investmentAsk}</p>
      <p><strong>Valuation:</strong>${startup.valuation}</p>
      <p><strong>Commitment:<strong></p>
      <p>${startup.commitments}</p>
      <p><strong>Previous Round:<strong></p>
      <p>${startup.previousRounds}</p>
      <p><strong>Pitch Deck:</strong><a href=${startup.pitchDeck}>${startup.pitchDeck}</a></p>
      <br>
      <br>
      <p>From AY Ventures Investment Team,</p>
      <footer style="display: flex; gap: 10px;">
    <div id="logo">
    <img src="https://res.cloudinary.com/dq75lhzky/image/upload/v1711977274/lnftqmwbfcf2vwevme6w.png" alt="logo">    
    </div>
    <div >
        <p>Mobile:  (+91) xxxxxxxxxx</p>
        <p>Email: <a href="mailto:deals@ayventures.in">deals@ayventures.in</a></p>
        <p>
            <a href="https://www.linkedin.com/company/ayventures">LinkedIn</a> |<a href="https://www.facebook.com/ayventuresdotin">Facebook</a>  |<a href="https://www.instagram.com/ayventuresdotin/">Instagram</a>| <a href="https://twitter.com/ayventuresdotin">X</a></p>
            <p><a href="https://ayventures.in/">Website</a></p>
            <p><a href="https://bit.ly/AYVProfile">Company Profile</a></p>
    </div>
        
    
    </footer>
   
      </body>
      </html>
      `;
    return emailTemplate;
  }

  export async function mailTrails(emailThread) {

    const reversedThread = [...emailThread].reverse();
   
  
    let html = '';
    for (const email of reversedThread) {
      
  
        html += `<div class="gmail_quote"><div dir="ltr" class="gmail_attr">On ${email.sentAt.toLocaleString()}, ${email.from} wrote:<br></div><blockquote class="gmail_quote" style="margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:1ex">${email.body}`;
      

    }
    reversedThread.forEach(element => {
        
        html += '</blockquote></div>';
    });
    
  
    return html;
  }