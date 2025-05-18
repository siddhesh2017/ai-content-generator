import React, { useEffect, useRef, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, Save } from 'lucide-react';

interface PROPS {
  aiOutput: string;
  onSave: (updatedOutput: string) => void;  // Callback to save updated output
}

const OutputSection = ({ aiOutput, onSave }: PROPS) => {
  const editorRef: any = useRef(null);
  const [message, setMessage] = useState<string | null>(null); // ✅ State for messages

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleSave = async () => {
    const updatedOutput = editorRef.current.getInstance().getMarkdown();
    await onSave(updatedOutput);

    // ✅ Show success message temporarily
    setMessage("✅ Your modified AI content has been saved successfully!");
    setTimeout(() => setMessage(null), 3000); // Hide message after 3 seconds
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);

    // ✅ Show copy success message temporarily
    setMessage("📋 AI content copied to clipboard!");
    setTimeout(() => setMessage(null), 2000); // Hide after 2 seconds
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h2 className="text-xl font-bold">Your Result</h2>
        
        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
          <Button 
            className="w-full sm:w-auto flex items-center justify-center gap-2 sm:px-4"
            onClick={handleCopy}
          >
            <Copy width={18} className="hidden sm:inline" /> Copy
          </Button>
          <Button 
            className="w-full sm:w-auto flex items-center justify-center gap-2 sm:px-4"
            onClick={handleSave}
          >
            <Save width={18} className="hidden sm:inline" /> Save
          </Button>
        </div>
      </div>

      {/* Success Message Display */}
      {message && (
        <div className="mt-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg text-center transition-all duration-300">
          {message}
        </div>
      )}

      {/* Editor Section */}
      <div className="mt-4">
        <Editor
          initialValue="Your result will appear here 😊"
          height="500px"
          useCommandShortcut={true}
          ref={editorRef}
        />
      </div>
    </div>
  );
};

export default OutputSection;
