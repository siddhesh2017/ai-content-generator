import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

interface PROPS{
  aiOutput:string
}

const OutputSection = ({aiOutput}:PROPS) => {
  const editorRef:any = useRef(null);
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput])
  return (
    <div className='bg-white shadow-lg rounded-xl'>
      <div className='flex justify-between items-center p-2'>
        <h2 className='font-xl font-bold'>Your Result</h2>
        <Button className='flex gap-2' onClick={()=>navigator.clipboard.writeText(aiOutput)}><Copy width={18} /> Copy</Button>
      </div>
      <Editor
        initialValue="Your result will appear here 😊"
        initialEditType="wysiwyg"
        height='600px'
        useCommandShortcut={true}
        ref={editorRef}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  )
}

export default OutputSection