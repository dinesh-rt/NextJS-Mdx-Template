// components/InfoBox.js
export default function InfoBox({ children }) {
    return (
      <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4">
        {children}
      </div>
    )
  }