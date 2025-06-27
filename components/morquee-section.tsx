import React from 'react'
import { Marquee, MarqueeContent, MarqueeItem } from './ui/marquee'
import Image from 'next/image'

const MorqueeSection = ({ title }: { title: string }) => {
    return (
        <>
            <Marquee>
                <MarqueeContent>
                    {new Array(10).fill(null).map((_, index) => (
                        <MarqueeItem key={index} className="flex items-center justify-center space-x-4">
                            <span className="md:text-6xl font-bold">{title}</span>
                            <Image
                                src="/images/svg.png"
                                alt="Service Icon"
                                width={50}
                                height={50}
                                className="object-contain"
                            />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </>
    )
}

export default MorqueeSection

