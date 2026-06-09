document.getElementById('debtRemovalForm').addEventListener('submit', function(e) {
    // 1. Instantly stop any default form behavior
    e.preventDefault();
    e.stopPropagation();

    // 2. Fetch the values typed into the form
    const fullName = document.getElementById('fullName').value;
    const idNumber = document.getElementById('idNumber').value;
    const phone = document.getElementById('phone').value;
    const userEmail = document.getElementById('userEmail').value;
    const status = document.getElementById('status').value;

    // 3. Define destination obfuscation variables
    const targetUser = "Riaan";
    const targetDomain = "cnrfinancialservices.co.za";
    const recipient = `${targetUser}@${targetDomain}`;

    // 4. Construct clean email headers and body content
    const subject = encodeURIComponent(`New Debt Review Removal Lead - ${fullName}`);
    
    const emailBody = encodeURIComponent(
        `Hello Riaan,\n\n` +
        `You have received a new website inquiry for Debt Review Removal from C & R Financial Solutions:\n\n` +
        `----------------------------------------\n` +
        `Client Name: ${fullName}\n` +
        `ID Number: ${idNumber}\n` +
        `Phone Number: ${phone}\n` +
        `Client Email: ${userEmail}\n` +
        `Current Status: ${status}\n` +
        `----------------------------------------\n\n` +
        `Please contact this client to process their free assessment.`
    );

    // 5. Fire the mailto prompt safely without changing the current webpage location
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${emailBody}`;
    
    // Using a virtual link click is the safest way to trigger mailto on mobile browsers without 405 errors
    const tempLink = document.createElement('a');
    tempLink.href = mailtoUrl;
    tempLink.click();
});
