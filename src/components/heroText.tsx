"use client";
import TI from 'typeit-react'
import { FontDisplay } from '@/typescript/fonts';
export default () => (
	<h1 className={`text-5xl font-bold mb-4 ${FontDisplay.className}`}>
          do your part for a <span className='underline'><TI options={{
			speed: 100,
			waitUntilVisible: true,
			loop: true
		  	}} getBeforeInit={(instance) => {
				instance
				  .type("cleaner")
				  .pause(750)
				  .delete(7)
				  .type("brighter")
				  .pause(750)
				  .delete(8)
				  .type("more sustainable")
				  .pause(750)
				  .delete(16)
				  .type("more eco-friendly")
				  .pause(750)
				  .delete(17)
				  .type("better")
				  .pause(6000)
				  .delete(6)
				return instance;
			  }}/></span> future.
        </h1>
)