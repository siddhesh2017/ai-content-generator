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
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import moment from 'moment'
import { useUser } from '@clerk/nextjs'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

interface PROPS{
  params: {
    'template-slug':string
  }
}

const CreateContent = (props:PROPS) => {

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const {user} = useUser();
  const router = useRouter();
  
  const selectedTemplate:TEMPLATE | undefined = Templates?.find(item => item.slug == props.params['template-slug'])


  // const generateAIContent = async (formData:any) => {
  //   //after development make it 10,000
  //   if(totalUsage>=100000){
  //     //alert("Please Upgrade")
  //     console.log("Please Upgrade");
  //     router.push('/dashboard/billing/page');
  //     return; 
  //   }

  //   setLoading(true);

  //   const selectedPrompt = selectedTemplate?.aiPrompt;
  //   const finalPrompt = JSON.stringify(formData)+', '+selectedPrompt;
  //   console.log(finalPrompt);

  //   const result = await chatSession.sendMessage(finalPrompt);
  //   setAiOutput(result?.response.text());
  //   await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text());
  //   setLoading(false);
  //   //console.log(result?.response.text());
    
  // }

  // const SaveInDb = async(formData:any,slug:any,aiResp:string) => {
  //   const result = await db.insert(AIOutput).values({
  //     formData:formData,
  //     templateSlug:slug,
  //     aiResponse:aiResp,
  //     createdBy:user?.primaryEmailAddress?.emailAddress,
  //     createdAt: moment().format('DD/MM/yyyy'),
  //     });
  //     // works correctly
  //     console.log(result);
  // }

  const [latestFormData, setLatestFormData] = useState<any>(null); // Store form data

  const generateAIContent = async (formData: any) => {
  
    setLoading(true);
    setLatestFormData(formData); // Store form data for later use
  //*******************************************************************************************//
    //Here we combine the data from user and attach it to the prompt
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;
    console.log(finalPrompt);
  
    const result = await chatSession.sendMessage(finalPrompt);
    let aiResponse = result?.response.text();
  
    // Convert AI response from HTML to Markdown
    if (aiResponse.startsWith('<')) { 
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = aiResponse;
      aiResponse = tempDiv.innerText; // Extract clean text from HTML
    }
  
    setAiOutput(aiResponse);
    await SaveInDb(formData, selectedTemplate?.slug, aiResponse); // Save the cleaned response
    setLoading(false);
  };
 
  const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
    const createdBy = user?.primaryEmailAddress?.emailAddress || 'defaultEmail@example.com' // Fallback if undefined
    try {
      const result = await db.insert(AIOutput).values({
        formData: formData, 
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: createdBy,
        createdAt: moment().format('DD/MM/yyyy'),
      })

      // works correctly
      console.log(result)
    } catch (error) {
      console.error('Error saving data to DB:', error)
    }
  }

  //Add user modified data to DB
  const handleSaveToDb = async (updatedAiOutput: string) => {
    if (!selectedTemplate || !latestFormData) {
      console.error("Missing formData or selectedTemplate.");
      return;
    }
  
    const createdBy = user?.primaryEmailAddress?.emailAddress || 'defaultEmail@example.com';
  
    try {
      await db.insert(AIOutput).values({
        formData: JSON.stringify(latestFormData),  // Use stored formData
        templateSlug: selectedTemplate.slug,
        aiResponse: updatedAiOutput,
        createdBy: createdBy,
        createdAt: moment().format('DD/MM/yyyy'),
      });
      console.log('Data successfully saved to DB!');
    } catch (error) {
      console.error('Error saving updated output to DB:', error);
    }
  };
  
  
  return (
    <div className='p-4 sm:p-6 rounded-xl bg-black h-auto overflow-hidden'>
      <div>
        <Link href={'/dashboard'}>
          <Button><ArrowLeft/></Button>
        </Link>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-5  sm:p-5 pt-3 sm:pt-7'>
        {/* FormSection */}
        <FormSection userFormInput={(v:any)=> generateAIContent(v)} selectedTemplate={selectedTemplate} loading={loading} />
        {/* OutputSection */}
        <div className='col-span-2'>
        <OutputSection aiOutput={aiOutput} onSave={handleSaveToDb} /> {/* Pass onSave function */}
        </div>
      </div>
    </div>
  );
}

export default CreateContent