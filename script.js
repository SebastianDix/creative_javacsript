#!/usr/bin/env node
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const width  = 60
const height = 60
const gap = 20 

for (let i = 0; i < 5; i++){
  for (let j = 0; j < 5; j++){
    let x = 100 + (width + gap) * i
    let y = 100 + (height + gap) * j

    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.rect(x,y,width,height);
    ctx.lineWidth = 1
    ctx.stroke()

    if (Math.random() > 0.5){
      ctx.beginPath()
      ctx.strokeStyle = "blue"
      ctx.lineWidth = i / j
      ctx.rect(x+8,y+8,width-16,height-16);
      ctx.stroke()
    }
  }
}

