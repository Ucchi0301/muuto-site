import Button from '@/components/Button'
import React from 'react'

const Hero = () => {
  return (
      <section id='hero' className="pt-20 pb-15 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-balance mb-6 text-foreground">
            音楽への情熱を
            <span className="text-primary block">共有しませんか？</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
            東京のDJサークル<br />
            ”muuto -ミュート-”です。
            <br />
            音楽を通じて友達を作ってみませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#events">イベントに参加する</Button>
          </div>
        </div>
      </section>
  )
}

export default Hero