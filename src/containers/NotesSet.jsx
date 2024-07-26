import React from 'react'
import { Note, Frame } from '../components'

const NotesSet = () => {
  return (
    <div className='notes mx-auto w-full max-md:w-[80%] flex flex-col items-center max-md:gap-y-11 snap-y duration-300 max-mid:pb-32 '>
        <Note 
            leftColor="whiteGray"
            rightColor="lightPurple"
            line1='Tasks, notes'
            line2='& everything'
            line3='in between.'
            slideFrame={<Frame src="https://rive.app/s/Rq6BReQCaESk8KMqvtSm-A/embed" />}/>
        <Note 
            leftColor='lightGreen'
            rightColor="darkGreen"
            line1='Integrated'
            line2='with apps'
            line3='you love.'
            slideFrame={<Frame src="https://rive.app/s/2UugwsmmMECoeqqzKEA6_w/embed" />}
            />
          <Note 
            leftColor='lightTomato'
            rightColor='tomato'
            line1='Work & personal'
            line2='at the flip'
            line3='of a switch.'
            slideFrame={<Frame src="https://rive.app/s/qiT3dxa-cEKGLAclD8fN6Q/embed" />}
            />
          <Note 
            leftColor='lightSkyBlue'
            rightColor='skyBlue'
            line1='Perfect for'
            line2='teams and'
            line3='solo users.'
            slideFrame={<Frame src="https://rive.app/s/dZyw7tSASEub-riwcYNpxA/embed" />}
            />
          <Note 
            leftColor='lightTomato'
            rightColor='tomato'
            line1='Private'
            line2='until you'
            line3='are ready.'
            slideFrame={<Frame src="https://rive.app/s/IuVboIGT606xRaJKEVWx8w/embed" />}
            />
    </div>
  )
}

export default NotesSet
