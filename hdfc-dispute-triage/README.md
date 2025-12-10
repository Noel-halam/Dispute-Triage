# HDFC Dispute Triage

This project is a web application designed to assist users in triaging disputes related to HDFC transactions. It allows users to enter complaint details and provides immediate feedback on the priority and expected response time based on the input.

## Project Structure

```
hdfc-dispute-triage
├── src
│   ├── index.html        # Main HTML document for the application
│   ├── css
│   │   └── styles.css    # CSS styles for the application
│   └── js
│       └── app.js        # JavaScript code for processing user input
├── package.json          # npm configuration file
├── .gitignore            # Files and directories to be ignored by Git
└── README.md             # Documentation for the project
```

## Features

- User-friendly interface for entering complaint details.
- Real-time assessment of complaint priority and SLA based on user input.
- Responsive design for accessibility on various devices.

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd hdfc-dispute-triage
   ```

3. Install the necessary dependencies:
   ```
   npm install
   ```

4. Open `src/index.html` in your web browser to view the application.

## Usage

- Enter the complaint text in the provided textarea.
- Optionally, input the transaction amount.
- Select whether the customer is considered high risk.
- Click the "Check Priority & SLA" button to receive feedback on the complaint.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.