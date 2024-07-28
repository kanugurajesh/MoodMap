'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'

export default function ServicesPage() {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center my-10">
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/home.png"
          alt="phq"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>The home of the mental health application</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/auth.png"
          alt="gemini explain"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>Implemented a very robust authentication in the application</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/auth-home.png"
          alt="gemini message"
          width={400}
          height={200}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>After authentication user can change his data from the User button</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/about.png"
          alt="personalized response"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>This page tells the details about the project</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/services.png"
          alt="mental track"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>This page shows the services and features of the application</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/contact.png"
          alt="complete analysis"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>This form is used to contact in case of emergency</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/doctor.png"
          alt="contact form"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>This page can only be accessed by professionals who can track all the patients using the application</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/phq.png"
          alt="chat gemini"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>This element is used to take the test from the user to track his depression</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/gemini.png"
          alt="clerk auth"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>You can ask gemini questions from this element</p>
      </Card>
      <Card className="w-[350px] h-[350px] flex flex-col gap-4 p-5">
        <Image
          src="/services/explain.png"
          alt="clerk auth"
          width={400}
          height={400}
          className="cursor-pointer w-full h-52"
        />
        <p className='font-semibold'>When you click on explain button a explanation text is shown below gemini element</p>
      </Card>
    </div>
  )
}
