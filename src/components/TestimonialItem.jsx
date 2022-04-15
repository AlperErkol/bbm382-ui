import React from 'react'

const TestimonialItem = ({data}) => {
  return (
    <div className="testimonial-item w-full h-full">
        <div className="testimonial-item-wrapper">
            <div className="testimonial-item-header mb-4 py-2 flex items-center">
                <div className="testimonial-item-picture w-12 h-12 rounded-full bg-secondary mr-3"></div>
                <div className="testimonial-item-information flex flex-col justify-start">
                    <p className="text-xs font-extrabold m-0 text-left">{data.name}</p>
                    <p className="text-xs font-extrabold m-0 text-left">{data.position}</p>
                </div>
            </div>
            <div className="testimonial-item-body">
                <cite className="text-sm font-semibold">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus blanditiis nam ipsam, laboriosam consequuntur libero fugit et voluptatem atque ab quod error ex in!"</cite>
            </div>
        </div>
    </div>
  )
}

export default TestimonialItem