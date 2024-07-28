import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="mt-10 flex flex-col gap-3 items-center">
      <Card className="p-10 flex flex-col gap-3 items-center">
        <Image
          src="/wellbeing.png"
          alt="MoodMap Logo"
          width={100}
          height={100}
        />
        <p className="mt-5">
          In India, the shortage of mental health professionals is severe, with
          only 0.75 psychiatrists per 100,000 patients, well below the WHO
          recommendation of at least 3 per 100,000. 🧠 This significant gap
          underscores the urgent need for innovative solutions to improve mental
          health care accessibility and support.
        </p>
        <p>
          MoodMap is a pioneering application designed to address this gap by
          enabling daily depression tracking 📊 using the PHQ-9 test. The app
          provides personalized feedback 🤖 through the Gemini model, offering
          tailored advice and support to users based on their daily assessments.
        </p>
        <p>
          Additionally, MoodMap facilitates affordable psychiatric monitoring
          🩺. By allowing a single psychiatrist to remotely monitor multiple
          patients, the app reduces consultancy costs and enhances the
          psychiatrist ability to manage multiple patients efficiently. This
          feature makes mental health care more accessible and cost-effective.
        </p>
        <p>
          MoodMap aims to make a significant impact by ensuring timely and
          adequate support for patients through critical condition alerts 🚨 and
          personalized advice 💬. By leveraging technology to bridge the gap
          between mental health needs and resources, MoodMap aspires to build a
          supportive community 🤝, making mental health care more scalable and
          effective in India. 🌍
        </p>
      </Card>
    </div>
  )
}
