![Image](https://raw.githubusercontent.com/caelinj/Aruna/master/assets/github-banner.png)
# Aruna
A Discord bot made for everyone, helping your server with lots of features, such as fun, music and information!

### A quick note..
Aruna is in pre-alpha/development, and honestly isn't ready to be used publicly. Things will break, she will pop on and off a lot. If your brave and still want to feel her *limited* power, you can add her by [clicking here (me!!)](https://discord.now.sh/483481409302822912?p0).

Please report any bugs in the [Discord server](https://discord.gg/tNymTcj).

## Things Aruna has:
- ~~Music!~~ Currently disabled, working on moving it to a better system (music is not on the GitHub repository, fyi)
- Loads of fun commands to keep you and your friends entertained for hours!
- Image and text manipulation, make yourself into Batman and slap your friend, put yourself in a trashcan, or make all your text superscript!
- Moderation, auto-mod and moderation logs to keep your precious server clean and happy.
- Informative commands as well as utilities, check server or user information, get a subreddit post, even search the web!

## I want to contribute!
Woah~! There's a few ways you can contribute to Aruna development:

### General code improvements, and major additions/fixes
All code **must** follow the [contribution guide]() (<-- click there to find it) to be accepted. Simple fixes like changing formatting or using a different method will not be accepted unless it improves the bot somehow (ie. making it quicker or tidying up code). Major changes must be made stable and follow the general flow/look of the bot, as an example, adding a random command that doesn't fit into an existing category or topic won't be accepted.

### Translations to different locales
Translations are greatly appreciated - if you can. Simply going onto Google Translate and pasting stuff in won't be accepted, I can do that myself, but it isn't accurate, can bug probably, and honestly just isn't cool, it's cheating. I'm looking for actual native speaking users that can translate the bot alltogether easily. If you want to, add me on Discord at `caelin#3152`, or [join the support server](https://discord.gg/tNymTcj), and we can have a chat.

### I can't do any of that
Aww.. that's okay. You can still support and contribute to Asuna! General typo fixes and little improvements like whitespace fixes are appreciated, as well as a *star on the repo* or an [*upvote*]() to help Aruna grow. And - domations are welcome too~!!

## Hosting your own version
Aruna is open source, and therefore free for you to host your own version, whether it's for a private, self-branded version for your anime server, for development and testing if you want to contribute, or anything really - as long as it follows the [self hosting agreements](). I'd also appreciate it if you don't remove credit from any of the commands, or majorly change the bot and host it publicly. Adding to bot lists as well is a big no-no.

If you do want to continue however, yay~! Firstly, clone the repository to your directory (ie. your Desktop):
```
/$ git clone https://github.com/caelinj/Aruna.git
```
Next, cd into the newly cloned folder and install the required modules:
```
/$ cd Aruna
/aruna/$ npm install
```
Finally, fill out the details in `src/config.json.example`, rename it to `config.json` (making sure it is a **valid** `json` file), and start the bot!
```
/aruna/$ node .
```
> If `node .` fails for you, you can run `cd src` from the main folder and run `node app.js` to manually run it.
Using a process manager like `pm2` is also recommended, that way if the bot crashes or your internet goes down, Aruna will boot back up in seconds! :tada:
```
/aruna/$ npm install pm2 --save
/aruna/$ cd src
/aruna/$ pm2 start app.js --name "aruna"
```