import React from 'react'

const Marquee = ({ title, textSize, marginBottom }) => {
    return (
        <div className={`marquee relative overflow-hidden ${marginBottom}`}>
            <div className="marquee__inner w-fit flex relative" aria-hidden="true">
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold stroke_text`}>{title}</h2>
                <h2 className={`${textSize} font-teko font-semibold`}>{title}</h2>
            </div>
        </div>
    )
}

export default Marquee