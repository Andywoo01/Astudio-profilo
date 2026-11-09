# Contact Page Template

Use this template to plan or recreate the contact section from the portfolio HTML page.

## Page metadata

- **Page title:** `[Your site name] | Contact`
- **Page description:** `[Short description of how visitors can contact you]`
- **Author:** `[Your name]`
- **Primary response time:** `I will respond to you no later than [timeframe].`

## Navigation

- [Home](/)
- [Work](/work)
- [About](/about)
- **Contact**
- [Tutorials](/tutorials)
- [GitHub]([GitHub URL])
- [Instagram]([Instagram URL])
- [LinkedIn]([LinkedIn URL])
- [Pinterest]([Pinterest URL])

## Contact section

### Heading

## Feel free to contact me

`[Optional supporting sentence about when the visitor can expect a reply.]`

### Contact form

**Form endpoint:** `[Form submission URL]`

**Method:** `POST`

#### Fields

1. **Firstname**
   - Input type: `text`
   - Field name: `firstname`
   - Autocomplete: `given-name`
   - Required: Yes

2. **Lastname**
   - Input type: `text`
   - Field name: `lastname`
   - Autocomplete: `family-name`
   - Required: Yes

3. **Email**
   - Input type: `email`
   - Field name: `email`
   - Autocomplete: `email`
   - Required: Yes

4. **Message**
   - Input type: `textarea`
   - Field name: `message`
   - Rows: `5`
   - Required: Yes

#### Actions

- **Send** — submits the form.
- **Reset** — clears all fields.

## Footer

- [Home](/)
- [Work](/work)
- [About](/about)
- **Contact**
- [Tutorials](/tutorials)
- [GitHub]([GitHub URL])
- [Instagram]([Instagram URL])
- [LinkedIn]([LinkedIn URL])
- [Pinterest]([Pinterest URL])

`[Your site name] © [Start year]-[Current year] All Rights Reserved`

## Implementation notes

- Keep labels connected to inputs with matching `for` and `id` values.
- Use native browser validation for required fields and email formatting.
- Preserve keyboard accessibility and visible focus states.
- Provide a success and error message after submission.
- Replace all bracketed placeholders before publishing.
