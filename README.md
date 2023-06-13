# Map Bot - React Native App

Map Bot is a powerful React Native mobile application that leverages the video camera on your device to map the world's roads. It incentivizes users to contribute by rewarding them with incentive tokens for their valuable contributions. This README file provides an overview of the Map Bot app and guides you through the installation and usage process.

## Features

- **Road Mapping**: Utilizes the video camera on the user's device to capture footage of roads while driving, walking, or biking.
- **Real-Time Processing**: Employs computer vision and machine learning algorithms to process the captured video frames in real-time.
- **Road Extraction**: Extracts road outlines from the video frames to create accurate maps.
- **User Contributions**: Encourages users to contribute to the mapping process by submitting their road footage.
- **Incentive Tokens**: Rewards users with incentive tokens for their contributions, which can be redeemed for various benefits within the app.

## Prerequisites

Before proceeding with the installation, ensure that you have the following prerequisites:

- Node.js (v14.x or above)
- NPM (v6.x or above)
- React Native CLI (v0.63.x or above)
- Xcode (for iOS development)
- Android Studio (for Android development)
- A physical device or emulator to run the app

## Installation

Follow these steps to install and set up the Map Bot app:

1. Clone the repository from GitHub:

git clone https://github.com/your-username/MapBot.git
2. Navigate to the project directory:

cd MapBot
3. Install the dependencies:

npm Install
4. For iOS development:
   - Navigate to the iOS directory:

cd ios
- Install the CocoaPods dependencies:
****
pod install
- Go back to the project directory:


5. Configure the development environment:
- For iOS development: Open the `MapBot/ios/MapBot.xcworkspace` file in Xcode.
- For Android development: Open the project directory in Android Studio.

## Usage

Follow these steps to run the Map Bot app:

1. Connect your physical device or start an emulator.

2. For iOS development:
- Ensure that the selected device or emulator is connected in Xcode.
- Press the "Run" button or use the shortcut `Cmd + R` to build and run the app.

3. For Android development:
- Ensure that the selected device or emulator is connected in Android Studio.
- Click on the "Run" button or use the shortcut `Shift + F10` to build and run the app.

4. Once the app is launched on the device or emulator, you can explore its various features.
- Grant necessary permissions for accessing the camera.
- Start recording the road footage by tapping the "Record" button.
- Stop recording by tapping the "Stop" button.
- Submit your recorded footage to contribute to the mapping process.
- Earn incentive tokens based on your contributions.

## Contributing

We welcome contributions to the Map Bot app. To contribute, follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository:
