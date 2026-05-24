import React,{useEffect,useState} from 'react'
import './App.css'
import AOS from 'aos'
import Audio from './Audio.jsx'
import Audio1 from './Audio1.jsx'
import Happypopup from './Happypopup.jsx'
import PasswordGate from './Password.jsx'
import 'aos/dist/aos.css'
import DaysSinceMet from './DaysSinceMet.jsx'
import video from './Video.jsx'
import image1 from  './assets/image1.jpg'
import image2 from './assets/imag2.jpg'
import image3 from './assets/image2.jpg'
import image4 from './assets/image3.jpg'
import image5 from './assets/image4.jpg'
import image6 from './assets/image6.jpeg'
import image7 from './assets/image7.jpeg'
import image8 from './assets/image8.jpeg'
import image9 from './assets/image9.jpeg'
import image10 from './assets/image10.jpeg'
import image11 from './assets/image11.jpeg'
import image12 from './assets/image12.jpeg'
import image13 from './assets/image13.jpeg'
import image14 from './assets/image14.jpeg'
import DaysSinceLove from './DaysSinceLove.jsx'
function App(){
  const [user2,setUser2]=useState(false)
  const [user,setUser]=useState(false)
  const user1=()=>{
    setUser(true)
  }
  const user3=()=>{
    setUser2(true)
  }
  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:false,
      mirror:true,
      easing:'ease-in-out',
      
    });
   AOS.refresh()
  },[])
  return(
    
    <>
    <PasswordGate>
    
    <nav className='nav' data-aos="fade-down" >
      <h1>KIRUKII & KIRUKAN </h1>
       <p>- A blessed friendship turned into a beautiful relationship 🌸❤️</p>
    </nav>
    <section className='section' data-aos="flip-right">
      
      <img src={image2} className='image1'  />
      <div className='card3d'>
        <p className='card3d1'>💖 “A true 💖 relationship is two 🤍 imperfect people 🤝 refusing to give up 💫 on each other 🫶✨”</p>
      </div>

    </section>
    <div className='intro' data-aos="fade-up">
      <p>
        🌸 Intro – A Beautiful Bond Called Friendship 🌸

Sometimes, friendship doesn’t start with big moments — it begins with a small smile, a casual “hi,” or just one unexpected glance 👀💫. Little by little, that one person starts meaning more than you ever imagined. What began as a simple connection in class slowly turned into something unforgettable — full of laughter 😂, late-night talks 🌙, care ❤️, fights 😤, and endless memories 💭.

From sharing notes 📚 to sharing feelings 💌, from random conversations to emotional confessions 🥺, every moment became a chapter in our story. You became my comfort zone, my favorite person to talk to, and the one who could change my mood with just a single word 🌈✨.

This is not just a story of friendship — it’s a bond filled with emotions, trust, and countless memories that I’ll cherish forever 💞. Through every smile, every tear, every misunderstanding, and every comeback — our friendship only grew stronger 💪💖.
      </p>
    </div>
    <section className='section' data-aos="flip-left">
        
    <img src={image1}  className="image2" alt="" />
    <div className='card3d'>
        <p className='card3d1'>“The photo that captured not just faces, but a friendship written in laughter 💕.”</p>
      </div>
   
    </section>
   
    <div className='para1' data-aos="fade-down">
      <p>
        The first time I saw you was in class 😍 — and honestly, I looked at you just like how I used to “sight” everyone 😅 but something about you hit different 💫. Then I saw you sitting next to Nive, all serious like a topper 📚😂 and I kept noticing you. After that, wherever I went, somehow you were there too! 😄

Then as usual, you know how it goes — in the lab, because Dhanusiya was talking to you, I also joined in and started a convo 😜. You talked so sweetly, and that day night itself I found your Insta ID 😎✨. I followed you, we started talking little by little 💬💗. You told me about your friends, but deep down I was like, “Hmm, she’s definitely single!” 😏🤣

Slowly, those chats turned into something special 💞. Whenever you talked, I felt so happy and relaxed 😌. Then we started sharing notes and secrets too 🥰. On Sep 21, that Sunday afternoon, when you opened up about your past 💔, I decided I should never hurt this girl again — but now I think I’m the one who’s been torturing you 😅🙃.

On Sep 22, I realized my mistake and felt so hurt 😔. I was scared you’d stop talking to me. You were the first girl (after mom 🥹) who cared for me so much, asked if I ate 🍽️, and genuinely looked after me. That care made me feel special 💖. I told myself, never lose this girl.

Then came that one day when you said, “Close the doors completely.” That hit me harder than Sep 22 🥲. But after that, we became best friends — not just friends, but so close that we knew everything about each other. 🤝💞

I still remember — when you had your problem, you shared it with me before even your mom 😭. That’s when I knew our bond was real ❤️.
 </p>
      
    </div>
    <div className="image3" data-aos="fade-right"><img src={image3} alt="" /></div>
    <div className='para1' data-aos="fade-up">
      <p>
        
        On Oct 2, when you went home 🏡, I missed you badly 🥺 — like, really missed you. Even you missed me too 🥰. When you came back, everything was back to normal. You started walking with me, and no matter what others said, you never left my side 💫.

Then came that unforgettable day — Ayudha Pooja holidays 🎉. When you gave me your hand 🤝, it was the first time I ever held a girl’s hand (except mom & athai 😅). My heart skipped a beat 💓 — that moment, I felt pure happiness. I wanted to hold it again 😳.

Later, when you didn’t let go of my hand for a while, my heart was doing a full happy dance 🕺💃. After that, we got even closer 🥰.

Then one day at the apartment, Vijay came and said hi 👋 — you talked for one minute, and I got super possessive 😤😂. I got tensed, walked away, but later everything went back to normal.

Then came Diwali 🎆 — you went home, and I didn’t expect to miss you that much, but I did 🥺. Those seven days — first three were full of fights 😤, next four full of missing and love ❤️. I’ll never forget when I asked to rest on your shoulder 🥹, and you actually said yes 😳💞. That one-minute moment was unforgettable 🕰️✨.

Even when I felt low, you understood me without me saying a word 💭. You always cared.
      </p>
     
    </div>
    <div className="image4"  data-aos="flip-right"><img src={image4} alt=""/><img src={image5}  alt="" /></div>
    <div className='para1' data-aos="fade-right">
      <p>When you got hurt near your eye 😢, I brought ointment and chocolate 🍫 — and your reaction made me melt 😍. You even said, “I want your shoulder.” That was the cutest moment ever 💕.

Then, everything went normal again until that one day you said you might leave 😭. I cried like crazy 😭 — even my kerchief was fully wet 🥹. That’s why I gave you a 9/10 rating 😂. Please don’t ever do that again 😣.

When you went home again, even for one day, I missed you a lotttttt 😭. Yesterday, when you touched my hand in the SF area, and you said, “Don’t keep it there,” I got scared thinking maybe you don’t like me anymore 😢. But then you said you felt safe and happy — that made my whole day 🥰.

Even when I said I’m taking a break, you were the first person who felt emotional 🥹. You even told your brother that I’m like a small kid to you 🫶. That line made my heart so full 🥺❤️.

You got possessive too when you heard that guy chatting for 6 hours 😂 — and I felt sooo happy because you actually care 💕.

</p>
    </div>
    <div className="card3d2" data-aos="flip-right">
      <p>No music can beat the peace I get from this voice. It’s like instant relief — one word from you, and my whole mood resets.</p>
      <Audio/>
    </div>
    <div className='para1' data-aos="fade-left">
      <p>On November 9, when I gifted you that website 🎁💻, I never imagined it would touch your heart the way it did 💔➡️💖, because in my mind it was just something I made with effort, but for you it became something emotional, something alive ✨, and when you cried 😭—not for a moment, not for an hour, but almost the entire day—I stood there confused, overwhelmed, and a little broken inside 😔🥺, wondering how something I created could make tears fall from your eyes like rain 🌧️. I even asked so many girls 🤔, questioning whether it was really that special, and every answer came back the same—that it was special because it carried my hard work, my time, my intention 💪✨, and that was the day I understood that feelings don’t measure logic, they only feel 💭❤️. That same day, when people casually spoke about video calls 📞, I always said “no chance” ❌ with confidence, but suddenly, without planning, without control, I asked you softly, “Will you do a video call?” 🥹📱, and in that second my heart lifted, my breath changed, and I felt like I was floating in the sky 😄🕊️.</p>
    </div>
    <section className='section' data-aos="flip-right">
      <div >
      <img className='image6' src={image6} alt="" />
    </div>
    <div className='card3d' >
      <p className='car'>Video 📱 calls are like ✨ soft moonlight 🌙 through a screen 🪟, where distance 🌍 melts, hearts 🤍 whisper without words, and every smile 😊 feels like a warm hug 🤍 traveling through pixels and love 💞</p>
    </div>
    </section>
    <div className='para1' data-aos="fade-top">
      <p>
        From that moment, our distance slowly disappeared 🤍, you started booking slots for me 🗓️🤝, standing by me quietly, and with every small help, we moved closer without even realizing it 💞. In special lab, studying Machine Lab together on Google Meet 💻📚 felt less like studying and more like sharing time, and even after college ended, my eyes searched only for your face 😊, finding excuses just to see you again 😅💖. Everything felt smooth, warm, and hopeful 🌈✨, but whenever you failed to clear a slot, every single attempt broke something inside me 😔💔, and though I smiled outside, my heart cried silently for you 😢. One day you didn’t come to college 🏫❌, and during the SF meeting, when I took photos for the first time with Sibi akka 📸 and later with Nivetha akka 😊, your words—asking whether we took pictures without you—cut deep 🥹, and I realised how many times I had unknowingly hurt you, little by little, day by day 💔. After PT exams 📄, classes faded away, slots repeated endlessly 😅🗂️, and when 500rp got deducted because of Joy 😞💸, none of it mattered to you—you walked straight to me, held my hand 🤝, and stayed beside me 🥺💞, and in that quiet moment, my heart screamed that I was not alone anymore 🫶💖.
      </p>
    </div>
    <div className="image4"  data-aos="flip-left"><img src={image7} alt=""/><img src={image8} className='img'  alt="" /></div>
    <div className='para1' data-aos="fade-bottom">
      <p>
      Then came the storms in the Infinity Roast group 😞, misunderstandings, pain, and you standing inside it, getting hurt silently 💔, and during our first Truth or Dare game on Google Meet 🎮💻, when you said you would miss me from this college 🥹💓, my heart overflowed with butterflies 🦋🦋🦋, even though I lied and named someone else as my crush 😔. Small fights came and went 😕, but every time, words failed and eyes spoke 👀🤍, healing what was broken without sound. The day you tried for a slot again and cried in SF 😭, resting your head on my shoulders 🥺, I held that moment close, doing everything I could to protect you 🤍🫂. Then came that Sunday 🏥, when I disappeared into silence, didn’t call, didn’t text, didn’t even ask if you ate 😞, and I know that silence hurt more than words 💔, and for that I am deeply sorry, rasathi 🥺💛. After that, time gifted me the most beautiful week of my life ✨💫, when our special lab sir was absent for ten days 😄, and laughter filled the air 😆💞—hands resting, heads leaning, shy touches 😳🤍, my hand on your waist 😶‍🌫️, yours inside my shirt 😳, and hearts racing with nothing but butterflies 🦋🦋🦋. Watching Sita Ramam together 🎬💖 became a memory stitched into my soul, and on the last day of special lab, when you were on your periods 😔, I tried in every small way to care for you 🤍🫶. I still remember that quiet moment in the veranda 🌅, just you and me, the world paused, my hand on your waist, calling you “my thango” 🥹💞.
      </p>
      </div>
      <section className='section' data-aos="flip-right">
        <div>
          <img className='image9' src={image9} alt="" />

        </div>
        <div className='card3d'>
          <p className='car1'>Every picture 🖼️ holds a beautiful story 🌸 behind it, a quiet moment ⏳ wrapped in memories 🤍, where feelings ✨ pause in time ⏰ and silently learn how to smile forever 😊💫</p>
        </div>
      </section>
      <div className='para1' data-aos="fade-top">
        <p >
          Exams arrived 📚😔, conversations reduced, and my possessiveness grew like a shadow 😞, involving others and hurting you 💔, and I regret that deeply, thango 🙏. That night when I said something careless—that if you loved someone else even my hand wouldn’t touch you 💔—your tears flowed for two long hours 😭, and those tears still echo inside me. Christmas came 🎄, and even while at Joy’s house 🏠, my thoughts walked into shops 🛍️, picking a keychain and a hair band 🎁 just for you, and when I gave them to you on a day we went to college alone 🥹, happiness filled me completely 😊💖, especially when you ate Dairy Milk in front of me 🍫, making me feel like I was feeding you myself 🥺💞. No matter who enters my life, no matter what the future writes—even if a future wife appears—you will always hold a place in my heart 🤍✨. That is how 2025 ended for us 🥹📸, wrapped in memories, and when my madness pulled me away after V2T 😔, my silence hurt you again, and for that I am sorry, thango 🙏; I never said how much I missed you, but I missed you endlessly, kiruki 🥺💔. I became overly possessive through others 😞, yet even when I stayed quiet, you searched for me, came to me, called me kiruka 🥹💖, and slowly, after two days, light returned 😊. When I video-called you from the hostel 📱 and saw your face, tears fell without warning 😭, and once again, you made me feel safe, calm, and whole 🤍🫂. I love the way you are possessive 💕, I love you exactly as you are, and I meant it when I said I continued the Igloo movie only because it was with you 🎬—with anyone else, I would have walked away ❌—because with you, I am comfortable, real, and myself, rasathi 🥹💖, and you truly, deeply, endlessly mean so much to me, thangameeee 🫶✨💛🦋🌙

        </p>
      </div>
      <section className='section' data-aos="flip-left">
         <div>
          <img className='image9' src={image10} alt="" />

        </div>
        <div className='card3d'>
          {
            !user && <p onClick={user1} className='car1'>Are you excited to see wonderfull fact? click the card</p>
          }
          {
            user && <p>
<DaysSinceMet />
            </p>

          }
          
          
        </div>
      </section>
      <div className="para1" data-aos="fade-up">
      
        
        <p>
         Paa 💖✨ you opened up about your first love and told me how it ended 🥺💔😔 I know you’ve gone through a lot in your past paa 😢💭💔 I promise you I won’t bring up your past again 🤝❤️💯 I’ll always stand by you as your backbone 💪🔥💞 I’ll always be there for you and support you chlmii 💖🌸✨
January just passed like that with exams 📚😵 leave 🏖️ and missing each other 😔💭💗 Then came February 2nd we both came for PBL 😄✨ same venue at first 😍 but later it got changed 😅 I was in A block 🏫 and you were in Mech block ⚙️ still during that 15 minute break we kept coming to see each other 🥹👀💞 Even though we had some fights 😤🔥 we still kept choosing each other 💖🤝💫

        </p>
        <h1 className='twist'>The biggest twist in our journey</h1>
        <p>The biggest twist in our life happened on February 13th 📅💗 we were on a video call 📱💞 I was studying 📚😌 and you were free so you were watching reels 😄🎥💫 I started listening to songs 🎶🎧 and suddenly I called you owner amma 🥺❤️💭 I don’t even know why I said that but those are things I imagine doing with my wife 💍💖✨ When you say you are mine it makes me feel really special paa 🫶💗🥹
Sometimes I feel scared thinking what if you won’t be mine in the end 😔💔💭 Whenever I hear that song Ennodo Nee Irundhaal 🎶😭 I only think about you and it makes me emotional 😢💗🌙
That day you asked through Sibi if you didn’t have a past would you have said okay to me 🥺💭 I didn’t even ask your answer properly 😔 but you said maybe in 1 to 2 years you would have said okay 💫💖 That made me feel both happy and a little sad 😭💞💔 Then you asked if I would come to see your parents if you said like that 😳🏠 from that moment I didn’t keep too many expectations 💭😔
That night February 13 around 11 35 pm 🌙✨ I told you this song is dedicated to my future wife 🎶💖💍 and you started to feel something 🥺💗💫 And earlier DK asked me what I would do if in future Varshini akka asked me 🤔💭 and without even thinking I said I would marry her 💍🔥❤️
When I told you that you started crying 😢💔😭 I didn’t understand why and kept thinking if I said something wrong 😔💭 That evening I even made a small bet with Jaswanth 😅🍫 about Feb 14 🎉 but later I also felt emotional and started crying thinking about everything 😢💔💭
After you slept I kept thinking about you and felt really bad 💔😔 I cried in the restroom 🚻😭 and that whole night both of us slept with tears 😢🌙💞
When you said you missed me 🥺💗 I was hoping you might say I love you ❤️🥹 but I misunderstood again and just slept 😔💔
Next morning you sent Happy Valentine’s Day pattu 💌🌹💖 I didn’t understand it fully so I just replied casually 😶💭 Later when you said destiny decides and your message will stay in your heart 💭🔐💗 I got confused 😕💭 but also felt that you had feelings for me 💖✨🥹
On February 14 at 12 31 ⏰💞 I officially committed with Varshu 💍❤️🎉 Everyone like Irfan DK and Joy were really happy 😄🥳💫 for us
</p>
      </div>
      <div className="card3d2" >
      <p>This song is for you… 💫 you came into my life so unexpectedly, but now you mean everything to me ❤️✨</p>
      <Audio1/>
    </div>
    <div className='para1'>
      <p>
        After that we started our journey together 💑🌍💖 Days went nicely with small fights 😤💔 and cute moments 🥰💕✨ we started enjoying our time together 💖🌸💫
When you went to Muthamizh Mandram 🎭😄✨ you were enjoying so I didn’t disturb you but I missed you a lot 😔💔💭 You know I spoke with Sibi for 2 hours 📞😌 but that was just to help solve your trio gang issue 🤝💞💫 I didn’t tell you that and it led to a fight 😢🔥 but it was just a misunderstanding 💭😔
Even with all that we spent good time together in SREC 🏫💖 and canteen ☕🥰💞 those were really nice moments 🥹✨🌸
We had many fights 😤💔🔥 but at the end we would hug and sleep 🤗💞🌙 and that made our bond stronger 💖💪✨
Even during the long 15 days leave 📅💭 we stayed connected and made our bond stronger 💪❤️💫
I promise you paa whatever anyone says about our decision we will stay strong 💯🔥❤️ We will be together you are the only one Mrs Logi 💍👑💖✨
I love you di papii 💖😘💞🔥✨
And somewhere in between I started calling you maa 🥺❤️👩‍👦✨ because it made you feel closer to my heart just like my mom 💖💫
      </p>
    </div>
        <div className="image4"  data-aos="flip-left"><img src={image11} alt=""/><img src={image12}  alt="" /></div>

      <div className="para1" >
        <p>Papiii… now I finally understand everything little by little. 💖✨🥺 When I sit alone quietly and think about us, so many memories start running inside my mind at the same time. 😭💭 From the smallest conversations to the biggest fights… from random smiles to emotional tears… everything feels so precious to me now. 🫂❤️✨ Sometimes I randomly smile remembering our happy moments 😊💕 and sometimes my eyes become teary thinking about how much we both struggled emotionally just to protect this relationship. 😭❤️‍🩹 But through everything, one thing never changed — my love for you. 🌍❤️♾️
We’ve had so many fights after February 14… but honestly, every single fight taught us something important about each other. 🥺💭 Every misunderstanding showed us how deeply we cared. 💞 Every argument made our bond stronger in some way. ❤️‍🔥✨ Thangame, I love you so much da. More than words can explain. 🥺💕 Before SREC Supra too, we used to fight a lot, but even then we never wasted our time with each other. 🫂💖 Somehow, even after every fight, we always came back to each other again with more love. 😭💞✨ All those little fights, emotional moments, late-night talks 🌙📞, misunderstandings 😔, random crying sessions 😭💔, possessiveness 🥺❤️, care 🤍, and endless love 💖 have now become beautiful memories for me, papii. 🌸✨
Papi, honestly before you came into my life, I was handling everything alone. 😔💭 I never really showed my emotions openly to people. I used to keep everything inside my heart and silently deal with my pain alone. 💔🥺 Sometimes I would overthink even the smallest things until it completely destroyed my peace. 😭💭 I know I had many problems within myself. I had anger 😤, confusion 😵‍💫, insecurities 💔, emotional attachment 🫂💕, and fear of losing people I love. Most of the fights between us happened because of my overthinking only, ma. 😭❤️‍🩹 I used to imagine unnecessary things and hurt both myself and you. But now I’ve started changing little by little because of you. 🌸💖
Now I try to speak honestly with you instead of hiding everything inside my heart. 🫂✨ I started expressing my feelings more openly because you made me feel safe emotionally. ❤️ Sometimes anger still comes 😤💭 and sometimes I still become emotional suddenly 😭💔 but I promise I’m trying every single day to become a softer and better person for us. 🥺💕 Because you deserve the calmest and purest version of my love. 🌍❤️
After the holidays started, I was waiting only for April 10. 😭📅✨ Every single day I kept checking the calendar with so much excitement and happiness. 🥺💞 I was imagining how beautiful that day would become. 🌸❤️ I had already prepared gifts 🎁💝, wishes 💌✨, surprises 🎊💕, and everything with so much love and eagerness. 😭💖 Finally, April 10 arrived… and I presented that video exactly the way I dreamed about. 🎥❤️✨ That video was not just a normal video for me. 🥺 It carried all my emotions 💭💖, memories 📸✨, feelings 🫂💕, and love for you. 🌍❤️ Through that video, I wanted you to understand how deeply I love you and how important you are in my life. 😭💞 I hope you truly liked it, papii. 🥺❤️ And then your 18 gifts finally reached you too. 🎁🎀💝✨ I was waiting so badly to see your reactions. 😭💕 I think you enjoyed them a lot… but still… just in case… 👀💞 Did you enjoy them or not? 😭💕 Click Yes or No.</p>
      </div>
    <div >
      <Happypopup/>
    </div>
    <div className="para1">
      <p>✨ Eeeee… but honestly, you can never press “No,” okayyyy? 😭💖💞
Then days slowly passed. 🌸⏳ Sometimes full of love 💖, sometimes full of fights 😭💔, misunderstandings 😔, tears 💧, emotional breakdowns 🥺, and random mood swings 😵‍💫. But no matter what happened, at the end of every day, it was always “us.” 🫂❤️✨ Always you and me together. 💞🌍 Sometimes we fought badly 😭💔 and stopped talking for some time… but even during those silent moments, my heart was still only searching for you. 🥺💭 Even when I acted angry, deep inside I only wanted your love and reassurance. ❤️‍🩹✨
Papi, these past few months were honestly very difficult for both of us. 😭💔 Somewhere in between our issues, third persons entered our problems too. 😔 Maybe you allowed it sometimes… maybe I allowed it too… but despite all that confusion, we still held onto each other tightly. 🥺🫂❤️ Before the holidays started, we had one of the biggest fights between us. 😭💔 Even though I knew you were going to your hometown, instead of understanding your situation calmly, I spoke emotionally and hurt you with my words. 🥺💭 Even now, whenever I think about that fight, tears come to my eyes. 😭💧 I’m really sorry for that, ma. 🫂❤️ I should have understood your situation better instead of reacting emotionally. 🥺💔
Papi, usually I don’t keep expectations from people because I’m scared of getting hurt. 💔🥺 But sometimes, in very tiny things, I unknowingly expect small efforts 🌸, small attention 💞, small love ❤️, or small reassurance 🫂 from you. And when those things don’t happen the way I imagined, I become upset and disappointed. 😭💔 I know I emotionally fail like that again and again, and I’m really sorry for hurting you because of my expectations. 🥺❤️‍🩹 Sometimes I just wanted to feel important in your life all the time. 💭❤️ Even small things from you made me extremely happy because your love means everything to me. 🫂💞
Then during the holidays, another huge fight happened. 😭💔 At one point, you even felt scared and thought, “If we fight this much now itself, what will happen after marriage?” 🥺💍 Hearing that broke me completely because I never wanted you to feel scared about our future. 😭💔 I’m really sorry for making you emotionally exhausted so many times, papii. 🫂❤️ But today, from the bottom of my heart, I promise you this — I’ll protect our relationship better in the future. ❤️✨ I don’t want our love story to become painful because of unnecessary fights anymore. 💞🌸 I want us to grow together peacefully while still loving each other like crazy. 😭❤️‍🔥
And one more thing… I want this website to become a showcase of our complete story. 🌍💖✨ Not only our happiest moments 😭💕, but also our darkest moments 🌧️💔, hardest days 😔, biggest fights 😭, deepest tears 💧, and emotional struggles too. Because our love story is beautiful not because it is perfect… but because even after all those difficult moments, we still chose each other again and again. 🫂❤️♾️ That is what makes our story special. 🌸💖✨ I want every page of that website to hold our emotions, our memories, our love, our pain, and our growth together. 📸💕✨
I don’t know why… but whenever I see another guy around you, I become extra possessive. 😭❤️‍🔥 I know you always maintain your limits properly. 🥺✨ I trust you completely. 💞 The problem is only my possessiveness becomes too much sometimes because I love you so deeply and I’m scared of losing you even in my imagination. 😭💔 Even seeing someone getting too close to you makes my heart uncomfortable sometimes. 🥺💭 I keep saying I’ll change soon… but honestly, it’s difficult because my heart becomes protective whenever it comes to you. 🫂❤️ Still, I promise I’ll slowly become better and healthier emotionally for us. 🌸💖</p>
    </div>
    <section className='section' data-aos="flip-right">
      <div >
      <img className='image6' src={image14} alt="" />
    </div>
    <div className='card3d' >
      <p className='car1'>From ur first birthday to forever, every smile, every memory, and every moment makes life more beautiful 💖🎂</p>

    </div>
    </section>
    <div className="para1">
      <p>
Then came my birthday… 🎂🎉✨ One of the most unforgettable days of my life. 💖 You made my birthday incredibly special in every possible way. 😭💕 The efforts you took 🥺❤️, the love you showed 💞, the care you gave 🤍, and the surprises you planned 🎁✨ made me feel truly loved. 🫂💖 And papiii… your priceless gifts made me feel like the luckiest person alive. 😭💝 Especially that doll 🧸💕 and your dress 👗❤️… those gifts carried your emotions inside them. 🥺💖 When I saw them, I cried so much because I realized how lucky I am to be loved by someone like you. 😭❤️ Thank you so much for every single effort you took for me, papiii. 🫂💞✨
And then came the unforgettable days from May 7 to May 10. 😭💔 Those were probably the most emotional days for both of us. 🥺💭 There were so many tears 💧😭, so much pain 💔, confusion 😔, emotional breakdowns 🫂, and overthinking 😵‍💫. I tried my best to stay patient and handle everything carefully because I didn’t want to lose you at any cost. 🥺❤️ Only we both know how much we cried during those three days. 😭💞 But after all those tears… there was only love 💖, affection 🫂💕, cuddles 🤍, reassurance 🌸, and endless konjals between us again. 🥹💞✨ Those days taught me that no matter how badly we fight, our love still finds a way back to each other. ❤️♾️
Then academics started again. 📚✨ Even normal moments became beautiful because you were there with me. 💕 Chemistry lab 🧪❤️, random class moments 😭✨, eye contacts 👀💞, smiles 😊💕, small conversations 🫂, silent caring 🤍, and spending time near you made everything feel special. 🌸💖 College itself started feeling beautiful because of your presence. 🥺❤️ Even simple moments like sitting near you, seeing you randomly, or hearing your voice became enough to make my whole day better. 😭💕
And omg… I almost forgot one very important memory. 😭💋 On May 11 at exactly 12:35 PM, in front of the EIE block… that kiss happened. 💖✨ It wasn’t just a kiss for me… it was “vaaiyodu vaai pathithal.” 🥺❤️‍🔥 Maybe it wasn’t 100% perfect, maybe it was clumsy 😭💕, nervous 🥺💓, and emotional… but still, it became one of the most unforgettable moments of my life. ✨💞 My heart was beating so fast at that moment. 💓😭 Even now, whenever I remember it, I smile like an idiot. 😭💖
Then suddenly your Logi got fever. 🤒💔 But even then, he waited only for his papii patiently… 🥺❤️ and for that waiting, he received three more “vaaiyodu vaai pathithals.” 😭💋💋💋 Honestly, those little moments became priceless memories for him forever. ♾️💖
</p>
    </div>
    <section className='section' data-aos="flip-right">
      <div >
      <img className='image6' src={image13} alt="" />
    </div>
    <div className='card3d' >
      {
            !user2 && <p onClick={user3} className='car1'>✨ A little magical surprise is waiting for you, thangam 🥹🤍
Tap the card and discover something special made with love 🎁💖
</p>
          }
          {
            user2 && <p>
<DaysSinceLove />
            </p>

          }
          
    </div>
    </section>
  <div className="para1">
    <p>Days kept moving beautifully after that. 🌸✨ And now… your Logi is genuinely so happy. 😭❤️ No matter how many problems came between us, his girl never left him 🫂💞, never gave up on him ❤️, never stopped loving him 💖, and never let him fight alone. 🥺✨ Even now, papi still has poss
essiveness over him… and secretly, he loves that possessiveness too because it makes him feel loved and important. 😭💕
Days continued passing beautifully… 🌸⏳ and once again, holidays started for 7 days. ✨ Then finally… May 24 arrived. 💖✨ It became one of the most emotional and special moments for me because it reminded me of everything we survived together. 🥺❤️ From strangers to becoming each other’s comfort place… from fights to healing… from tears to smiles… from confusion to understanding… we truly came so far together. 🫂💞✨
Thank you for everything, dear. 🌍❤️ Thank you for staying beside me during my worst phases. 🥺💞 Thank you for understanding me even when I became difficult to handle. 😭❤️ Thank you for loving me through my anger 😤, overthinking 😵‍💫, insecurities 💔, possessiveness 🥺❤️, and emotional breakdowns. 😭💞 Thank you for never giving up on us no matter how difficult things became. 🫂❤️ Thank you for becoming my comfort place 🏡💖, my happiness 😊💕, my peace 🌸, my safest person 🫂❤️, and my favorite human in this entire world. 🌍💞✨
No matter what happens in life, no matter how many fights or problems come in the future… these memories 📸✨, these moments 💖, these tears 💧, this love ❤️, and every second we spent together will always remain one of the most precious parts of my life forever. ♾️❤️ And no matter how much time passes… I’ll still choose you again and again, every single time, papii. 🫂💖✨🌸❤️
pa</p>
  </div>
  <div className="card3d2">
    <a href="https://res.cloudinary.com/drhib3yg1/video/upload/v1779625788/video1_vveben.mp4">💖 Happy 100th day, thangam! This is your small surprise gift from your papi 🥹🤍
A tiny creation made with lots of love, memories, and happiness just for you 🌸✨

🎁 Tap the card to see your gift, chellam 🤍

</a>
  </div>
    <div className='conclusion' data-aos="fade-up">
      <p>Now, even after all these fights and misunderstandings 😅, we always come back together 🩵. Because truth is —
Kirukii can’t live without Kirukan, and Kirukan can’t live without Kirukii! 💞💞

Love you loads, my crazy bestie 🥰💖
Forever and ever till the sky runs out of clouds ☁️💫.Our friendship is more than just a bond — it’s a melody 🎶 that calms my soul 💖, a light 🌟 that guides me through dark days 🌙, and a story 📖 I’ll cherish forever 💫. No matter how far we go, our hearts will always vibe the same 💕🤝✨.</p>
      <p>Paaa unna vitutu eppothum poga maaten paa ithu yen kiruki mela promise.That one word di thango "PAA" itzz my most memorable word di thangooo</p>
      <p>Ur my only positive and precises thing in 2025 thango</p>
      <p>Love uuu soo much dii kirukii 🤍✨</p>

    </div>
    
   </PasswordGate>
    </>
  )
}
export default App