console.log('Bot is starting')

var Twit = require('Twit');

var config = require('./config');
//console.log(config);

var T = new Twit(config);

var T = new Twit({
  consumer_key:     'kyumIJqwMHNYP3tGCM39hHaPF'
, consumer_secret:  'mUv9WyKD2hgTh8FQYmMuSyB2oObyyuUz2JqkINWeAv7ER08Mo1'
, access_token:     '957408349515014147-q3mcIgjRdjZ7WajWAGyIrn1uNuO3xRn'
, access_token_secret: 'AuOu5oa261vLWmrxm7MsHFv565zyfLgICD2ECv9vKmLLW'
})

var tweets = ["testtweet1", "testtweet2", "testtweet3"];
var tweetThis = tweets[0];
var tweetsSize = tweets.length;
var count = 0;

//for (i = 0; i < tweetsSize; i++){
//  tweetThis = tweets[i];
//  tweetIt(tweetThis);
  tweetIt();
  console.log(count);
  setInterval(tweetIt, 1000*60*60*2);
//}


//tweetIt(tweetThis);
//setInterval(tweetIt, 1000*60*60*12)    //tweet once every twelve hours



function tweetIt(tweetThis){

  console.log(count);
  var tweets = [
                "Unable to make out your last message, will you please repeat  [07 Jul 1962	Alitalia	771]",
                "Skipper's shot!  We've been shot. I was trying to help. [07 May 1964	Pacific Air Lines	773]",
                "Have you still got the runway OK? Ah .. just barely .. we'll pick up the ILS here. [08 Nov 1965	American Airlines	383]",
                "I have no radar contact with you. [30 Jun 1967	Thai International	601]",
                "Not very # far off the runway. Sure as # isn't. [06 Nov 1967	Trans World Airlines	159]",
                "Watch it! [10 Aug 1968	Piedmont Airlines	230]",
                "We're finished! [05 Jan 1969	Ariana Afghan Airlines	701]",
                "Four two delta got the strobe lights in sight [20 Mar 1969	Avion Airways]",
                "Pete, sorry. [05 Jul 1970	Air Canada	621]",
                "Sound of stickshaker begins and continues to end of recording [08 Dec 1972	United Airlines	553]",
                "Hey, what's happening here? [29 Dec 1972	Eastern Air Lines	401]",
                "There he is .. look at him!  Goddamn that son-of-a-bitch is coming! Get off! [27Mar 1977	Pan Am / KLM	1736/4805]",
                "We’re going to do it right here. [	04 Apr 1977	Southern Airways	242	]",
                "He's the emergency he's crashed and is burning off the end of the runway. [11 Feb 1978	Pacific Western Airlines	314	]",
                "Ma I love you. [25 Sep 1978	Pacific Southwest Airlines	182	]",
                "So he gave us wrong indications. We thought we were to the left. [23 Dec 1978	Alitalia]",
                "United 173, Mayday!  We're... the engines are flaming out - we're going down! [28 Dec 1978	United Airlines	173]",
                "Look at this. He blew up an engine. Equipment. We need equipment. [25 May 1979	American Airlines	191	]",
                "Charlie,Charlie get it up. [31 Oct 1979	Western Airlines	2605	]",
                "Actually, these conditions don't look very good at all, do they? [28 Nov 1979	Air New Zealand	901	]",
                "No need for that, we are okay, no problem, no problem. [19Aug 1980	Saudi Arabian Airlines	163]	",
                "Larry, we're going down, Larry....  I know it! [13 Jan 1982	Air Florida	90	]",
                "What's happened? [01 Sep 1983 Korean Airlines	007	]",
                "Push it way up. [02 Aug 1985	Delta Air Lines	191	]",
                "All hydraulics failed. [12 Aug 1985	Japan Airlines	123	]",
                "-	...hit the water...hit the water...hit the water. [22 Oct 1986	WNBC news copter	]",
                "What? There's what?  Some hills, isn't there? [08 Jun 1988	VASP	168	]",
                "Oh  #### this can't be!Oh  #### this can't be! [31 Aug 1986	Aeromexico	498	]",
                "Goodnight, Goodbye, We Perish! [09 May 1987	LOT Polish Airlines	5055	]",
                "We have, er, a smoke problem and we are doing an emergency descent! [28 Nov 1987	South African Airways	295	]",
                "	We cannot communicate with the flight attendants. [28 Apr 1988	Aloha Airlines	243]",
                "	Watch out for those pylons ahead, eh. See them? Yeah, yeah, don't worry. [26 Jun 1988	Air France	296Q]",
                "We got an engine failure.  We're not gonna make it. Full power.. [31 Aug 1988	Delta Airlines	1141]",
                "Can't keep this SOB thing straight up and down. [08 Feb 1989	Independent Air	1851	]",
                "What the hell was that?  I don't know. [24 Feb 1989	United Airlines	811	]",
                "That's it I'm dead. [07 Jun 1989	Surinam Airways	764]",
                "Nah, I can't pull 'em off or we'll lose it, that's what's turning ya. [19 JUl 1989	United Airlines	232	]",
                "Flame out! Flame out on engine number four. [25 Jan 1990	AVIANCA	052]",
                "Okay, we just had a seven thirty-seven land and blow up [01 Feb 1991	USAir/Skywest	1493/5569	]",
                "Oh, God ... flip! [03 Mar 1991	United Airlines	585	]",
                "Ah, reverser's deployed. [26 May 1991	Lauda Air	004	]",
                "Going down...eh...1862, going down, going down, copied going down? [04 Oct 1992	El Al	1862	]",
                "A bit low, bit low, bit low. [21 Dec 1992	Martinair	495	]",
                "Lost number one and two. [31 Mar 1993	Japan Airlines	46E	]",
                "There it goes, there it goes!  Oh no! [18 Aug 1993	American Int. Airways	808	]",
                "Watch your speed. Going around. [04 Apr 1994	KLM Cityhopper	195	]",
                "It's OK, It's OK, don't hurry, don't hurry. [26 Apr 1994	China Airlines	140	]",
                "Down, push it down. 02 Jul 1994	[USAir	1016]	",
                "Hang on. What the hell is this? [08 Sep 1994	USAir	427]	",
                "OK, mellow it out, mellow it out. [31 Oct 1994	American Eagle	4184	]",
                "Why's that ignition light on?  We just had a flame-out? [13 Dec 1994	American Eagle	3379	]",
                "Amy, I love you. [21 Aug 1995	Atlantic Southeast Airlines	529	]",
                "Crash landing.  We're goin' in.  We're going down. [22 Sept 1995	U.S. Air Force	27	]",
                "Uh.. where are we. [20 Dec 1995	American Airlines	965	]",
                "Oh what's happening [06 Feb 1996	Birgenair	301	]",
                "Uh, smoke in the cockpit... smoke in the cabin. [11 May 1996	Valujet	592	]",
                "I think that was him.  I think so. God bless him. [17 Jul 1996	TWA	800	]",
                "	Mountains!!! [29 Aug 1996	Vnokovo Airlines	2801]",
                "	What shit have they done? [02 Oct 1996	Aeroperu	603]",
                "What, oooh ###. Oh ### me. [19 Nov 1996	United Express	5925	]",
                "	Well, he must have crashed then. [06 Aug 1997	Korean Air	801]",
                "Aaaaaa. Allah Akbar. [26 Sep 1997	Garuda Indonesia Airlines	152	]",
                "Oh my God!  Oh my God! [16 Feb 1998	China Airlines	676	]",
                "And we are declaring emergency now Swissair one eleven. [02 Sep 1998	Swissair	111	]",
                "Aw ####, we're off course...we're way off. [01 Jun 1999	American Airlines	1420	]",
                "I rely on God [31 Oct 1999	Egypt Air	990	]",
                "	-	OK we are ditching. [13 Jan 2000	Avisto]",
                "	Ah here we go. [31 Jan 2000	Alaska Airlines	261]",
                "Would like to do one 360 due to high on approach Sir. [17 Jul 2000	Indian/Alliance Airlines	7412	]",
                "	What the #### is going on? [19 Jul 2000	Airwave Transport	9807]",
                "Concorde forty-five ninety you have flames, you have flames behind you. [25 Jul 2000	Air France	4590	]",
                "#### something there. [31 Oct 2000	Singapore Airlines	006	]",
                "That’s all guys! F##! [04 Jul 2001	Vladivostokavia	352	]",
                "What the hell are we into. We're stuck in it. [12 Nov 2001	American Airlines	587	]",
                "	-	Oh # what's that. [08 Nov 2002	Richmor Aviation]",
                "I have nothing in front of me. [22 Jun 2003	Brit Air	5572	]",
                "See what the aircraft did! [	03 Jan 2004	Flash Air	604	]",
                "That's weird with no lights. [	27 Aug 2006	Comair	5191	]",
                "Damn it, we're going to crash... This can't be happening! [	01 Jun 2009	Air France	447	]",
                "Oh my god, oh my god [	17 JuL 2007	Tam	3054	]",
                "We're gonna be in the Hudson. [	15 Jan 2009	US Airways	1549	]",
                "We're down. [	12 Feb 2009	Continental Express	3407	]",
                "F*ckkkkkk [10 Apr 2010	Polish Air Force	1549	]"
              ];

  if(count < tweets.length){
    var tweetThis = tweets[count];
  }else{
    tweetThis = ' ';
  }


  var tweet = {
    status: tweetThis
  }
  count = count + 1;
  T.post('statuses/update', tweet, tweeted)

  function tweeted(err, data, response){
//    console.log(data)
    if(err){
      console.log("something wwent wrong")
    }else {
      console.log('it worjked')
    }
  }

  }
