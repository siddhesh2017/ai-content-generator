'use client'
import React from 'react'
import FormSection from '../components/FormSection'
import OutputSection from '../components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { useState } from 'react'

interface PROPS{
  params: {
    'template-slug':string
  }
}

const CreateContent = (props:PROPS) => {

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');

  const selectedTemplate:TEMPLATE | undefined = Templates?.find(item => item.slug == props.params['template-slug'])

  const generateAIContent = async (formData:any) => {
    
    setLoading(true);

    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalPrompt = JSON.stringify(formData)+', '+selectedPrompt;
    console.log(finalPrompt);

    const result = await chatSession.sendMessage(finalPrompt);
    setLoading(false);
    console.log(result?.response.text());
    setAiOutput(result?.response.text());
  }

  return (
    <div className='p-6 bg-gradient-to-br from-purple-50 via-orange-50 to-yellow-50 h-auto'>
      <div>
        <Link href={'/dashboard'}>
          <Button><ArrowLeft/></Button>
        </Link>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 p-5 pt-7'>
        {/* FormSection */}
        <FormSection userFormInput={(v:any)=> generateAIContent(v)} selectedTemplate={selectedTemplate} loading={loading} />
        {/* OutputSection */}
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  ) 
}

export default CreateContent