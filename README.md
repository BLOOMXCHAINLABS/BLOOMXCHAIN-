# BloomXChain Waiting Page

A beautiful Next.js TypeScript project featuring a waiting page for the BloomXChain token presale with a 36-hour countdown timer.

## Features

- 🚀 **Modern Design**: Beautiful gradient backgrounds with animated effects
- ⏰ **Live Countdown**: Real-time 36-hour countdown timer
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🎨 **Custom Styling**: Tailwind CSS with custom BloomXChain branding
- ⚡ **Performance**: Built with Next.js 14 and TypeScript for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with Tailwind CSS
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component
├── components/
│   └── CountdownTimer.tsx  # Countdown timer component
├── public/                 # Static assets
└── ...
```

## Customization

- **Colors**: Modify the custom colors in `tailwind.config.js`
- **Countdown Duration**: Change the target time in `CountdownTimer.tsx`
- **Content**: Update the announcement text in `app/page.tsx`
- **Styling**: Customize the design in the component files

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks (useState, useEffect)

## License

MIT License 