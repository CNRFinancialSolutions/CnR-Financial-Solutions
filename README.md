# C & R Financial Solutions Web Repository

## Form Mail Setup instructions
The contact form coordinates with Formspree to route user inquiries directly to Riaan's address (`Riaan@cnrfinancialservices.co.za`) without explicitly listing it in the source code where web scrapers could discover it.

### Action Steps:
1. Go to [Formspree](https://formspree.io/) and create a free account.
2. Build a new form endpoint target and set the target notification recipient email to `Riaan@cnrfinancialservices.co.za`.
3. Copy your unique target hash key identifier code string from Formspree.
4. Open your `index.html` file, locate line 81, and replace `YOUR_FORMSPREE_ID_HERE` with your unique identifier string key:
   `action="https://formspree.io/f/YOUR_FORMSPREE_ID_HERE"`
5. Save the file and upload your repository to GitHub.
