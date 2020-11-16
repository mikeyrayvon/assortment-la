import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const Dot = () => {
  let ball, pos, mouse
  const speed = 0.1
  const fpms = 60 / 1000

  useEffect(() => {
    gsap.set('.dot', {xPercent: -50, yPercent: -50})

    ball = document.querySelector('.dot')
    pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    mouse = { x: pos.x, y: pos.y }

    const xSet = gsap.quickSetter(ball, "x", "px")
    const ySet = gsap.quickSetter(ball, "y", "px")

    window.addEventListener('mousemove', e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add((time, deltaTime) => {
      const delta = deltaTime * fpms;
      const dt = 1.0 - Math.pow(1.0 - speed, delta);

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    })
  }, [])

  return (
    <img className='dot fixed pointer-events-none z-50' style={{
      width: 20,
      height: 'auto'
    }} src='/images/dot.svg' />
  )
}

export default Dot
