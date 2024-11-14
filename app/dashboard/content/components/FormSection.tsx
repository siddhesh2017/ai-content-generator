'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface PROPS{
    selectedTemplate?:TEMPLATE,
    userFormInput:any
}

const FormSection = ({selectedTemplate, userFormInput}:PROPS) => {
    const [formData, setFormData] = useState<any>();
    const onSubmit = (e:any) => {
        e.preventDefault();
        userFormInput(formData)
    }
    const handleInputChange = (e:any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value });
    }
  return (
    <div className='bg-white p-5 shadow-md border rounded-lg'>
        {/* @ts-ignore */}
        <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70}/>
        <h2 className='font-bold text-2xl text-slate-900'>{selectedTemplate?.name}</h2>
        <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

        <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item, index) => (
                <div className='my-2 flex flex-col gap-2 mb-7'>
                    <label className='text-slate-700 font-bold'>{item?.label}</label>
                    {item?.field == 'input'? <Input name={item.name} required={item?.required} onChange={handleInputChange} />: item.field == 'textarea'?<Textarea name={item.name} required={item?.required} onChange={handleInputChange}  />:null}
                </div>
            ))}
            
            <div className='flex justify-end'>
                <Button type='submit'>Generate Content</Button>
            </div>
        </form>
    </div>
  )
}

export default FormSection