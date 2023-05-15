---
title: "Two Weeks, One WebApp: Trading Deep Learning for Freelancing"
date: 2023-05-09T15:15:01+02:00
draft: false
---


Five months ago, I ditched what I thought was my dream job. I was a deep learning developer, messing with models, training them, changing them, doing research, and applying findings. But I left it for, well, let's just say reasons unrelated to the role itself 🥸. Fast-forward to May 2023, and I've just completed leading and coding an MVP for an automatic image-text translation WebApp in two weeks as my first paid freelance gig. Think Google Lens, with an editing suite. The client was thrilled and asked me to continue working on it. Refining the product for a future public release as a paid service. Here, I'll share what those two weeks looked like, how leading a [project from the ground up felt like](#the-switcheroo), [the technologies I used](#tech-stack-stumbling-blocks-to-stepping-stones), [the mistakes I made and the lessons I learned](#contracts--clocks). Above all, I'll tell you how this experience reminded me that there's more to technology than [just deep learning](#a-breath-of-fresh-air-stepping-out-of-deep-learning). Honestly, it's been a while since I've felt this excited about my work.

#### _Disclaimer_
_I'm neither a hardened freelancing veteran nor a backend specialist. So take my words with a jumbo-sized bucket of salt, especially when you see this little fella_ "🤷".

# The Switcheroo

My role switched a lot, but I didn't mind. One moment, I was figuring out the project, looking at solutions and resources. The next, I was immersed in backend development, refining code, writing tests, and trying to get the darned CI to pass. Then, I was talking with the client, coming up with solutions on the spot, and nudging him in a direction that made more sense for development. After these discussions, I immediately began drafting a UI that was both intuitive and straightforward, aiming to minimize the effort for the frontend developer I had subcontracted and was coordinating with. A lot of switching accompanied by a lot of freedom.

# Tech Stack: Stumbling Blocks to Stepping Stones

Right before my freelancing gig even started, I was just dipping my toes into the world of backend development. FastAPI was the tool I picked up – partly because of all the buzz around it and partly because I had fooled around with it a bit before. So it made sense to go back to it again. To kick things off, I snatched the backend from [tiangolo's repo](https://github.com/tiangolo/full-stack-fastapi-postgresql), and dropped it into a dummy repo backend to practice on. Simple, right?

Wrong. Setting up debugging in VS was a nightmare, sucking up all my time like a black hole. And the overall project layout never hit me right. So, what's a guy to do? I did what any sane developer would do: I started shopping around for alternatives. Starting from zero? Nah, not my style. I was all about leveraging the time-tested, proven stacks and project structures.

Enter "[zhanymkanov/fastapi_production_template](https://github.com/zhanymkanov/fastapi_production_template)." It was like stumbling upon a hidden gem in a sea of GitHub repos. It had the same base tech stack as tiangolo's repo - PostgreSQL, Alembic, Redis, Docker, and, of course, FastAPI. But the project structure was more streamlined, less nested, and way more intuitive 🤷. Plus, writing endpoints, schemas, services, and all that jazz was way easier. Everything had its own neat, logical module. Just look at this tree.

{{< details "🌳" >}}
```bash
.
├── auth
│   ├── __init__.py
│   ├── config.py
│   ├── router.py
│   ├── schemas.py
│   ├── service.py
│   └── utils.py
├── box
│   ├── __init__.py
│   ├── router.py
│   ├── schemas.py
│   └── service.py
├── gcloud
│   ├── __init__.py
│   └── client.py
├── image_proxy
│   └── router.py
├── __init__.py
├── config.py
├── constants.py
├── database.py
├── exceptions.py
├── main.py
├── models.py
├── redis.py
└── utils.py
```
{{< /details>}}

And compare it to this rabbit hole.

{{< details "🐰🕳️" >}}

```bash
├── api
│   ├── api_v1
│   │   ├── api.py
│   │   ├── endpoints
│   │   │   ├── __init__.py
│   │   │   ├── images.py
│   │   │   ├── login.py
│   │   │   └── users.py
│   │   └── __init__.py
│   ├── __init__.py
│   └── deps.py
├── core
│   ├── __init__.py
│   ├── config.py
│   └── security.py
├── crud
│   ├── __init__.py
│   ├── base.py
│   ├── crud_image.py
│   └── crud_user.py
├── db
│   ├── __init__.py
│   ├── base_class.py
│   ├── base.py
│   ├── init_db.py
│   └── session.py
├── models
│   ├── __init__.py
│   ├── image.py
│   └── user.py
├── models
│   ├── __init__.py
│   ├── boxes.py
│   ├── image.py
│   ├── msg.py
│   ├── token.py
│   └── user.py
├── __init__.py
└── main.py
```
{{< /details>}}

And oh, the debugging! No more wrestling matches. Just a quick install of debugpy, open the ports on the Docker container for the app, and voila! Debugging sorted. By the time I signed the paper, I was ready with a tech stack and a sound project structure to build on.

# Contracts & Clocks

In the end, it turned out that the toughest part of these two weeks wasn't all that tech stuff, but something way more mundane - bad contract clauses and unrealistic time expectations.

The contract we'd signed off on stated we'd be paid for a two regular work weeks. But here's the kicker - that sweet, sweet paycheck was only going to roll in if we hit certain milestones. A reasonable guarantee if you're working with some dude from the internet for the first time, without any solid portfolio to show off. So, even though on paper we seemed to be paid by the hour, in reality, it was a task-based payout system. Which turned into more hours then what we were gonna get paid for. A rookie mistake on our part, coupled with an overzealous but understandable stance from our client. Fair and square.

The solution to our first problem? After delivering the MVP, we rewrote the contract. The client, having seen our work, didn't bat an eyelid and agreed immediately. And before you think I'm painting the client as the villain here, even he hadn't spotted this snag. Once I explained the situation, he was on board with axing the 'no milestone, no pay' clause.

Then we had mistake number two - overpromising on features. Both me and my frontend buddy can code our way out of a paper bag, given half a chance. But slap a ticking clock on our screens, and suddenly, 'easy' tasks morph into 'pass-the-aspirin' and 'hard' tasks into 'I need a drink'. The culprit? A trifecta of poor time estimation, cue [XKCD](https://xkcd.com/1658/), ignorance of the debilitating effects of time pressure on our productivity, and an earnest desire to make the client happy. The pressure was what caught me off guard the most. I've heard of "programmer's estimation" and have been under the gun before, but this whole 'client vs boss' dynamic is a whole different ball game.

The solution? Avoid overpromising and clearly define expectations. It's vital to inform the client that besides working on features, a chunk of time needs to be allocated for testing and ensuring a robust development/deployment workflow. Essentially, we need to shift the client focus from short-term to long-term gains.


# A Breath of Fresh Air: Stepping Out of Deep Learning

Believe me, I haven't turned my back on deep learning, ML, or AI as a whole. But, taking a breather from it felt like a rush of fresh air in a musty room. Trading the never-ending maze of models and the relentless surge of research for the sleeker, well-ordered world of backend development was a relief I didn't know I craved.

Taking a pause from deep learning showed me there's more to explore. Sometimes, it's all about rolling up your sleeves to wrestle Docker, grapple with CI tools, and blueprint a rock-solid backend. It's about chit-chatting with your client, and piecing together something worthwhile. Embracing a different roles, and building a whole product from scratch, is grounding, it's real, and it's just as exciting.

At the end of the day, stepping out of deep learning was like a well-deserved vacation. And I returned, energized, with a new perspective and a broader set of skills.
