'use client'
import React from 'react'
import FormSection from '../components/FormSection'
import OutputSection from '../components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PROPS{
  params: {
    'template-slug':string
  }
}

const CreateContent = (props:PROPS) => {

  const selectedTemplate:TEMPLATE | undefined = Templates?.find(item => item.slug == props.params['template-slug'])

  const generateAIContent = (formData:any) => {

  }

  return (
    <div className='p-6 bg-gradient-to-br from-purple-50 via-orange-50 to-yellow-50 h-screen'>
      <div>
        <Link href={'/dashboard'}>
          <Button><ArrowLeft/></Button>
        </Link>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 p-5'>
        {/* FormSection */}
        <FormSection userFormInput={(v:any)=> generateAIContent(v)} selectedTemplate={selectedTemplate} />
        {/* OutputSection */}
        <div className='col-span-2'>
          <OutputSection/>
        </div>
      </div>
    </div>
  ) 
}

export default CreateContent