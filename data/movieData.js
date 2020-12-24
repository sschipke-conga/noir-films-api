const movieData = [
    {
      "id": 5822,
      "title": "Sweet Sweetback's Baadasssss Song",
      "release_date": "1971-04-23",
      "original_language": "en",
      "original_title": "Sweet Sweetback's Baadasssss Song",
      "genre_ids": [
        28,
        80,
        18
      ],
      "backdrop_path": "/rfWjk3uWIQ0tdWudbtOAveDiFAr.jpg",
      "adult": false,
      "overview": "After saving a Black Panther from some racist cops, a black male prostitute goes on the run from \"the man\" with the help of the ghetto community and some disillusioned Hells Angels.",
      "poster_path": "/mHTHMwFFSIqTkzMu8tUUzpWiJ6w.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/l01IA7vplyeci8h6sNkOGf9CCRF.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 482,
      "original_language": "en",
      "original_title": "Shaft",
      "overview": "Cool black private eye John Shaft is hired by a crime lord to find and retrieve his kidnapped daughter.",
      "poster_path": "/yJChPuu2V339IiDPQDHeIh1SYpA.jpg",
      "release_date": "1971-06-25",
      "title": "Shaft",
    },
    {
      "adult": false,
      "backdrop_path": "/468tPHO5kZY6V1ceWxMKXrGMQy4.jpg",
      "genre_ids": [
        28,
        80,
        18,
        10402,
        53
      ],
      "id": 21968,
      "original_language": "en",
      "original_title": "Super Fly",
      "overview": "Super Fly is a cocaine dealer who begins to realize that his life will soon end with either prison or his death. He decides to build an escape from the life by making his biggest deal yet.",
      "poster_path": "/nFAD8tGmQ5jDUoOhXXFkUW1Q7z1.jpg",
      "release_date": "1972-08-04",
      "title": "Super Fly",
    },
    {
      "adult": false,
      "backdrop_path": "/ApVd7q1l4xZOkFkh2tkawICBE4I.jpg",
      "genre_ids": [
        35
      ],
      "id": 73823,
      "original_language": "en",
      "original_title": "Sidewalk Stories",
      "overview": "A street artist (Charles Lane) rescues a baby girl (Nicole Alysia) after her father is murdered. The artist then sets off to find the mother, but has to first learn how to care for the child. Ultimately he ends up in a horse drawn chase of the murderers.",
      "poster_path": "/8Lc4h2WEf6cTgrl9oUOYG9ed9nA.jpg",
      "release_date": "1989-09-15",
      "title": "Sidewalk Stories",
    },
    {
      "adult": false,
      "backdrop_path": "/5pIh97vJoD3aA4DU68VwMi8eaY9.jpg",
      "genre_ids": [
        18,
        35
      ],
      "id": 114750,
      "original_language": "en",
      "original_title": "Dear White People",
      "overview": "Four black students attend an Ivy League college where a riot breaks out over an “African-American” themed party thrown by white students. With tongue planted firmly in cheek, the film explores racial identity in 'post-racial' America while weaving a story about forging one's unique path in the world.",
      "poster_path": "/jH3851P2DjjnBsrjphbR1CWRzm6.jpg",
      "release_date": "2014-10-17",
      "title": "Dear White People",
    },
    {
      "adult": false,
      "backdrop_path": "/pyCspB4drqIYJcum8MgiYxnGd6x.jpg",
      "genre_ids": [
        80,
        18,
        35
      ],
      "original_language": "en",
      "original_title": "Dope",
      "poster_path": "/n6u00imN7AX2NiyWUc5kTgHXmEf.jpg",
      "title": "Dope",
      "overview": "Malcolm is carefully surviving life in a tough neighborhood in Los Angeles while juggling college applications, academic interviews, and the SAT. A chance invitation to an underground party leads him into an adventure that could allow him to go from being a geek, to being dope, to ultimately being himself.",
      "release_date": "2015-06-19",
      "id": 308639,
    },
    {
      "id": 11066,
      "title": "Boomerang",
      "release_date": "1992-06-30",
      "original_language": "en",
      "original_title": "Boomerang",
      "genre_ids": [
        35,
        10749
      ],
      "backdrop_path": "/rNulkgxFcmlgre3G8S7ABegzPVm.jpg",
      "adult": false,
      "overview": "Marcus is a successful advertising executive who woos and beds women almost at will. After a company merger he finds that his new boss, the ravishing Jacqueline, is treating him in exactly the same way. Completely traumatised by this, his work goes badly downhill.",
      "poster_path": "/cc9YAZq5NXiIEJsHjW7p2FaHQkp.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/tjjWBMfTkKxL227nBQALjyz9sc1.jpg",
      "genre_ids": [
        99
      ],
      "id": 89585,
      "original_language": "en",
      "original_title": "Chisholm '72: Unbought & Unbossed",
      "overview": "In 1968, Shirley Chisholm becomes the first black woman elected to Congress. In 1972, she becomes the first black woman to run for president. Shunned by the political establishment, she's supported by a motley crew of blacks, feminists, and young voters. Their campaign-trail adventures are frenzied, fierce and fundamentally right on!",
      "poster_path": "/2AzPwr7B0ipJeU6y4THGxs0UZVv.jpg",
      "release_date": "2004-01-14",
      "title": "Chisholm '72: Unbought & Unbossed",
    },
    {
      "id": 450875,
      "title": "LA 92",
      "release_date": "2017-04-28",
      "original_language": "en",
      "original_title": "LA 92",
      "genre_ids": [
        99,
        36
      ],
      "backdrop_path": "/lj79NEheTtAqHXjNvWaIPjd7ERe.jpg",
      "adult": false,
      "overview": "Twenty-five years after the verdict in the Rodney King trial sparked several days of protests, violence and looting in Los Angeles, LA 92 immerses viewers in that tumultuous period through stunning and rarely seen archival footage.",
      "poster_path": "/oT7OmkAoVnYDa8XbGipCEj6PVmN.jpg",
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 368928,
      "original_language": "en",
      "original_title": "And When I Die, I Won't Stay Dead",
      "overview": "A journey into the life and work of beat poet and activist Bob Kaufman and his insistence that poetry is fundamental to humanity's moral survival.",
      "poster_path": null,
      "release_date": "2015-10-23",
      "title": "And When I Die, I Won't Stay Dead",
    },
    {
      "id": 500859,
      "title": "Black Mother",
      "release_date": "2018-11-02",
      "original_language": "en",
      "original_title": "Black Mother",
      "genre_ids": [
        99
      ],
      "backdrop_path": "/qVWe0wlbea2G3Z8kSM06MMYTWyU.jpg",
      "adult": false,
      "overview": "Part film, part baptism, in BLACK MOTHER director Khalik Allah brings us on a spiritual journey through Jamaica. Soaking up its bustling metropolises and tranquil countryside, Allah introduces us to a succession of vividly rendered souls who call this island home. Their candid testimonies create a polyphonic symphony, set against a visual prayer of indelible portraiture. Thoroughly immersed between the sacred and profane, BLACK MOTHER channels rebellion and reverence into a deeply personal ode informed by Jamaica’s turbulent history but existing in the urgent present.",
      "poster_path": "/6lD2qZWM7CKxlcme6YDmdXJw4UV.jpg",
    },
    {
      "id": 319089,
      "title": "The Black Panthers: Vanguard of the Revolution",
      "release_date": "2015-03-08",
      "original_language": "en",
      "original_title": "The Black Panthers: Vanguard of the Revolution",
      "genre_ids": [
        99
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "The story of the Black Panthers is often told in a scatter of repackaged parts, often depicting tragic, mythic accounts of violence and criminal activity; but this is an essential story, vibrant, human; a living and breathing chronicle of a pivotal movement that birthed a new revolutionary culture in America.",
      "poster_path": "/uw0zW1jlC9Yf3rK0KFkKx9iEFYm.jpg",
    },
    {
      "id": 121983,
      "title": "Free Angela and All Political Prisoners",
      "release_date": "2012-09-09",
      "original_language": "en",
      "original_title": "Free Angela and All Political Prisoners",
      "genre_ids": [
        99
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "FREE ANGELA is a feature-length documentary about Angela Davis and the high stakes crime, political movement, and trial that catapults the 26 year-old newly appointed philosophy professor at the University of California at Los Angeles into a seventies revolutionary political icon.  Nearly forty years later, and for the first time, Angela Davis speaks frankly about the actions that branded her as a terrorist and simultaneously spurred a worldwide political movement for her freedom.",
      "poster_path": "/8U54lsioipjWBVV2HPRsCl1DqkR.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/yLGeoh6HJEdA2qYmIPJ4Q2vPHdy.jpg",
      "genre_ids": [
        99
      ],
      "original_language": "en",
      "original_title": "13th",
      "poster_path": "/tcKNWD6IFPPsvkpvyZ548naz0is.jpg",
      "overview": "An in-depth look at the prison system in the United States and how it reveals the nation's history of racial inequality.",
      "id": 407806,
      "title": "13th",
      "release_date": "2016-10-07",
    },
    {
      "id": 309991,
      "overview": "Frequently marginalized within a community that already struggles against marginalization -- that is, the gay, lesbian and bisexual community -- African American transgender males make their voices heard in this film from Kortney Ryan Ziegler. Six articulate black transmen -- who are also artists, students, husbands, fathers, lawyers and teachers -- speak candidly about race, gender, body image and status.",
      "release_date": "2008-11-15",
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "original_language": "en",
      "original_title": "Still Black: A Portrait of Black Transmen",
      "poster_path": null,
      "title": "Still Black: A Portrait of Black Transmen",
    },
    {
      "adult": false,
      "backdrop_path": "/3NcTGBFQnGpUUvfloymFiTaejZA.jpg",
      "genre_ids": [
        18
      ],
      "id": 95597,
      "original_language": "fr",
      "original_title": "La Noire de...",
      "overview": "Eager to find a better life abroad, a Senegalese woman becomes a mere governess to a family in southern France, suffering from discrimination and marginalization.",
      "poster_path": "/hYYAk9I9KkscSr8DC30KyDjzsVu.jpg",
      "release_date": "1966-01-01",
      "title": "Black Girl",
    },
    {
      "id": 925,
      "title": "Do the Right Thing",
      "release_date": "1989-06-14",
      "original_language": "en",
      "original_title": "Do the Right Thing",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/etyhjRp5sHCCvtZ32aHg6CVtr3K.jpg",
      "adult": false,
      "overview": "Salvatore \"Sal\" Fragione is the Italian owner of a pizzeria in Brooklyn. A neighborhood local, Buggin' Out, becomes upset when he sees that the pizzeria's Wall of Fame exhibits only Italian actors. Buggin' Out believes a pizzeria in a black neighborhood should showcase black actors, but Sal disagrees. The wall becomes a symbol of racism and hate to Buggin' Out and to other people in the neighborhood, and tensions rise.",
      "poster_path": "/63rmSDPahrH7C1gEFYzRuIBAN9W.jpg",
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 48992,
      "original_language": "en",
      "original_title": "I Like It Like That",
      "overview": "Lisette and husband Chino face marital difficulties. She is fed up with the kids, while he has job troubles. His mother Rosaria hates Lisette and the neighborhood tramp has designs on Chino. Things get even worse when Chino goes to jail and Lisette gets a good job uptown. Can this marriage be saved?",
      "poster_path": "/aCxh21UPLHi7Pxm9ykH1GNx39OW.jpg",
      "release_date": "1994-10-14",
      "title": "I Like It Like That",
    },
    {
      "id": 125582,
      "title": "Down in the Delta",
      "release_date": "1998-12-25",
      "original_language": "en",
      "original_title": "Down in the Delta",
      "genre_ids": [
        18
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "A single mother plagued by alcohol and drug addictions is sent with her children from Chicago to her ancestral home in the Mississippi Delta, to live with her uncle and aunt for the summer.",
      "poster_path": "/2ygShFSdj1hug8xj2q28OMktAU4.jpg",
    },
    {
      "id": 45153,
      "title": "Eve's Bayou",
      "release_date": "1997-11-07",
      "original_language": "en",
      "original_title": "Eve's Bayou",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/ncNEi4CsA5139XsNUlYZP8zGh7d.jpg",
      "adult": false,
      "overview": "Summer heats up in rural Louisiana beside Eve’s Bayou, 1962, as the Batiste family tries to survive the secrets they’ve kept and the betrayals they’ve endured.",
      "poster_path": "/33yTPcGSv7eo3FVlb7XKACHl1M8.jpg",
    },
    {
      "overview": "In the post–World War II South, two families are pitted against a barbaric social hierarchy and an unrelenting landscape as they simultaneously fight the battle at home and the battle abroad.",
      "release_date": "2017-11-16",
      "adult": false,
      "backdrop_path": "/h5eLFfFcYSFL9qai3wUfJACEGlZ.jpg",
      "genre_ids": [
        18
      ],
      "id": 414425,
      "original_language": "en",
      "original_title": "Mudbound",
      "poster_path": "/7cL7UgVMeP9xDSxU2NyAqeAQAbt.jpg",
      "title": "Mudbound",
    },
    {
      "id": 650,
      "overview": "Boyz n the Hood is the popular and successful film and social criticism from John Singleton about the conditions in South Central Los Angeles where teenagers are involved in gun fights and drug dealing on a daily basis.",
      "release_date": "1991-07-12",
      "adult": false,
      "backdrop_path": "/4nBAP4CmC4012nJdxUc3pT4jp1.jpg",
      "genre_ids": [
        18
      ],
      "original_language": "en",
      "original_title": "Boyz n the Hood",
      "poster_path": "/v4ox4aSCNT5vyLXl4Q71JiWwCXW.jpg",
      "title": "Boyz n the Hood",
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18
      ],
      "id": 137765,
      "original_language": "en",
      "original_title": "Bless Their Little Hearts",
      "overview": "Charlie Banks is a black, unemployed Watts resident. At home most of the day, Banks gets on the nerves of his wife  and three children. One evening, while getting some fresh air, Hardman makes the acquaintance of a welfare mother. After this, he's not underfoot at home anymore; he's found another bed to occupy.",
      "poster_path": "/9gKsQG2vvqnnwDVGiU9FoKoxXqW.jpg",
      "release_date": "1984-12-12",
      "title": "Bless Their Little Hearts",
    },
    {
      "genre_ids": [
        18,
        10402
      ],
      "original_language": "en",
      "original_title": "Ma Rainey's Black Bottom",
      "poster_path": "/pvtyxijaBrCSbByXLcUIDDSvc40.jpg",
      "overview": "Tensions rise when the trailblazing Mother of the Blues and her band gather at a Chicago recording studio in 1927. Adapted from August Wilson's play.",
      "release_date": "2020-11-25",
      "id": 615667,
      "title": "Ma Rainey's Black Bottom",
      "adult": false,
      "backdrop_path": "/9UFwcWa3lKeAllcW0EvkmOuHqek.jpg",
    },
    {
      "id": 25624,
      "title": "Rosewood",
      "release_date": "1997-02-21",
      "original_language": "en",
      "original_title": "Rosewood",
      "genre_ids": [
        28,
        18,
        36,
        53
      ],
      "backdrop_path": "/uriAuN4tFwFvNhHGaU6A0CEara8.jpg",
      "adult": false,
      "overview": "Spurred by a white woman's lie, vigilantes destroy a black Florida town and slay inhabitants in 1923.",
      "poster_path": "/5EeTYDXdrpD9mZSSwsrFbqgok9U.jpg",
    },
    {
      "id": 17364,
      "title": "Their Eyes Were Watching God",
      "release_date": "2005-03-06",
      "original_language": "en",
      "original_title": "Their Eyes Were Watching God",
      "genre_ids": [
        18,
        10749
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "A drama set in the 1920s, where free-spirited Janie Crawford's search for happiness leads her through several different marriages, challenging the morals of her small town. Based on the novel by Zora Neale Hurston.",
      "poster_path": "/vVn2KohzehZMN40YmNM69HqXxWm.jpg",
    },
    {
      "id": 41478,
      "title": "Panther",
      "release_date": "1995-05-04",
      "original_language": "en",
      "original_title": "Panther",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/wLNDiDL0o4Ht2UsLd1jGu4tCM5N.jpg",
      "adult": false,
      "overview": "Panther is a semi-historic film about the origins of The Black Panther Party for Self-Defense. The movie spans about 3 years (1966-68) of the Black Panther's history in Oakland. Panther also uses historical footage (B/W) to emphasize some points.",
      "poster_path": "/gxGOkt6WBhSIdZiQqyVEccRURVv.jpg",
    },
    {
      "overview": "Opens with Bleek as a child learning to play the trumpet, his friends want him to come out and play but mother insists he finish his lessons. Bleek grows into adulthood and forms his own band - The Bleek Gilliam Quartet. The story of Bleek's and Shadow's friendly rivalry on stage which spills into their professional relationship and threatens to tear apart the quartet.",
      "release_date": "1990-08-03",
      "adult": false,
      "backdrop_path": "/z1qDYbd2iaBJs4heX4J0Irwzdr8.jpg",
      "genre_ids": [
        18,
        10749,
        10402,
        35
      ],
      "title": "Mo' Better Blues",
      "original_language": "en",
      "original_title": "Mo' Better Blues",
      "poster_path": "/5IrTKJScDjCE7AFwKHBvDKszD73.jpg",
      "id": 41823,
    },
    {
      "id": 340275,
      "title": "Chi-Raq",
      "release_date": "2015-12-04",
      "original_language": "en",
      "original_title": "Chi-Raq",
      "genre_ids": [
        35,
        80,
        18
      ],
      "backdrop_path": "/6djfBXCTOskpADDavEdNYcc9aKz.jpg",
      "adult": false,
      "overview": "A modern day adaptation of the ancient Greek play Lysistrata by Aristophanes, set against the backdrop of gang violence in Chicago.",
      "poster_path": "/ml3LitMKejwxrYNTQWdwIbyhDeb.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/5RDOXoZJcm9paWR6dp1XpDej7Cs.jpg",
      "genre_ids": [
        18,
        10749
      ],
      "id": 8291,
      "original_language": "en",
      "original_title": "Poetic Justice",
      "overview": "In this film, we see the world through the eyes of main character Justice, a young African-American poet. A mail carrier invites a few friends along for a long overnight delivery run.",
      "poster_path": "/6jE7Vzh3edBQtbbDcF4AC5gMX2g.jpg",
      "release_date": "1993-07-23",
      "title": "Poetic Justice",
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 44784,
      "original_language": "en",
      "original_title": "Symbiopsychotaxiplasm: Take 2 ½",
      "overview": "A movie about making movies about making movies. In 1968, William Greaves shot several pairs of actors in a scene in which a woman confronts her husband and ends their relationship. In \"Take 2 1/2,\" Greaves starts with 1968 takes of one of these pairs of actors plus footage of the crew discussing the film's progress. Then, 35 years later, Greaves brings back to Central Park those actors and some of the original crew (plus others) to film a reunion of the characters Alice and Freddie. We watch scenes of these characters and discussions among the actors and crew. Greaves explores and dramatizes the dialectic in the creative process.",
      "poster_path": "/2pmL46pu0TKndhE9HcpuXNUNjcI.jpg",
      "release_date": "2005-01-01",
      "title": "Symbiopsychotaxiplasm: Take 2 ½",
    },
    {
      "overview": "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
      "release_date": "2017-02-24",
      "adult": false,
      "backdrop_path": "/vZ7EVk7FaNEWYqlVWbFLHP8Z0LU.jpg",
      "title": "Get Out",
      "genre_ids": [
        9648,
        53,
        27
      ],
      "id": 419430,
      "original_language": "en",
      "original_title": "Get Out",
      "poster_path": "/qbaIViX3tgWSTSFXbldq0ODMdi4.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/ruQIT30GxUN3gckMdt1LYMkmDqp.jpg",
      "genre_ids": [
        18,
        14,
        27
      ],
      "id": 83096,
      "original_language": "en",
      "original_title": "Ganja & Hess",
      "overview": "After being stabbed with an ancient, germ-infested knife, a doctor's assistant finds himself with an insatiable desire for blood.",
      "poster_path": "/mdQYKF4rmeDUNKpdee7DjVCzN9N.jpg",
      "release_date": "1973-04-20",
      "title": "Ganja & Hess",
    },
    {
      "id": 273896,
      "title": "Losing Ground",
      "release_date": "1982-06-02",
      "original_language": "en",
      "original_title": "Losing Ground",
      "genre_ids": [
        35,
        18
      ],
      "backdrop_path": "/dEpavyqNZZJJvSmDLxSu1dbEIb.jpg",
      "adult": false,
      "overview": "A comedy-drama about a Black American female philosophy professor and her insensitive, philandering, and flamboyant artist husband who are having a marital crisis. When the wife goes off on an almost unbelievable journey to find \"ecstasy\", her husband is forced to see her in a different light.",
      "poster_path": "/r35jAxyp2SwgMP7x4KZStKWzxFl.jpg",
    },
    {
      "id": 34152,
      "title": "Crooklyn",
      "release_date": "1994-05-13",
      "original_language": "en",
      "original_title": "Crooklyn",
      "genre_ids": [
        35,
        18
      ],
      "backdrop_path": "/mIKuvEhBvDf9LGxE9x6m0hDR9Au.jpg",
      "adult": false,
      "overview": "From Spike Lee comes this vibrant semi-autobiographical portrait of a school-teacher, her stubborn jazz-musician husband and their five kids living in '70s Brooklyn.",
      "poster_path": "/iFqe07F78SO0SIBzWcK4I5MwNvP.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/ogw4HLfdmSqjpZx6k0C4u5l3sFE.jpg",
      "genre_ids": [
        18
      ],
      "id": 124088,
      "original_language": "en",
      "original_title": "Just Another Girl on the I.R.T.",
      "overview": "Chantel Mitchell, a hip, articulate, black high-school girl in Brooklyn, is determined not to become \"just another girl on the IRT\" (the IRT is one of NYC's subway lines). She dreams of medical school, a family, and an escape from the generational poverty and street-corner life her friends seem to have accepted as their lot. But personal and sexual challenges confront Chantel on her way to fulfilling these dreams.",
      "poster_path": "/jjBthOisXwuyUqBd1BAmIzdSf4S.jpg",
      "release_date": "1993-01-01",
      "title": "Just Another Girl on the I.R.T.",
    },
    {
      "overview": "When her husband is sentenced to eight years in prison, Ruby drops out of medical school in order to focus on her husband's well-being while he's incarcerated - leading her on a journey of self-discovery in the process.",
      "release_date": "2012-10-12",
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18
      ],
      "id": 83588,
      "original_language": "en",
      "original_title": "Middle of Nowhere",
      "poster_path": "/s0Jtw4YYRQ460vo0QfrjrdLqJCf.jpg",
      "title": "Middle of Nowhere",
    },
    {
      "id": 94725,
      "title": "To Sleep with Anger",
      "release_date": "1990-10-12",
      "original_language": "en",
      "original_title": "To Sleep with Anger",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/72Tej5edjAMnSe7RLmH7H0qomnd.jpg",
      "adult": false,
      "overview": "An enigmatic drifter from the South comes to visit an old acquaintance who now lives in South-Central LA.",
      "poster_path": "/k97OYGAbHIP6MNuOOGDUgYDnncW.jpg",
    },
    {
      "id": 91735,
      "title": "My Brother's Wedding",
      "release_date": "1983-09-13",
      "original_language": "en",
      "original_title": "My Brother's Wedding",
      "genre_ids": [
        18
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "A man who despises his upwardly mobile lawyer brother reluctantly agrees to be best man at his wedding.",
      "poster_path": "/ou66bJnkz33zGtoBe5LIIfs9pHf.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/A9KPbYTQvWsp51Lgz85ukVkFrKf.jpg",
      "genre_ids": [
        18
      ],
      "id": 376867,
      "original_language": "en",
      "original_title": "Moonlight",
      "overview": "The tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.",
      "poster_path": "/93NN95a71MsQ4tR2zSLv8BNK2qh.jpg",
      "release_date": "2016-10-21",
      "title": "Moonlight",
    },
    {
      "id": 24885,
      "title": "Medicine for Melancholy",
      "release_date": "2008-03-07",
      "original_language": "en",
      "original_title": "Medicine for Melancholy",
      "genre_ids": [
        18,
        10749
      ],
      "backdrop_path": "/28pMYfH4Hw0Wn3DTjKk5cFFzUIj.jpg",
      "adult": false,
      "overview": "Waking from a one-night stand that neither remembers, Micah and Joanne find themselves wandering the streets of San Francisco, sharing coffee and conversation and searching for a deeper connection.",
      "poster_path": "/jTpJQXaz45TwjXHbqsf5pDwlOSo.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/s0a9MaV8fwBiQNcsy55Vm2sJn4B.jpg",
      "genre_ids": [
        18
      ],
      "id": 287322,
      "original_language": "en",
      "original_title": "Blackbird",
      "overview": "Seventeen-year-old Randy tries very hard to be a good person. Since his father left, Randy takes care of his emotionally disturbed mother, and he's the kind of friend all of his classmates can depend on. As strong as he seems on the outside, Randy is hiding a secret inner struggle and denial of his true self. It's not until he opens himself up to love that he discovers that becoming a man means accepting who you really are.",
      "poster_path": "/30ZQdfpt8097DwD3USxJDymHW8Q.jpg",
      "release_date": "2014-02-16",
      "title": "Blackbird",
    },
    {
      "id": 47272,
      "title": "Brother to Brother",
      "release_date": "2004-01-17",
      "original_language": "en",
      "original_title": "Brother to Brother",
      "genre_ids": [
        18
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "A drama that looks back on the Harlem Renaissance from the perspective of an elderly, black writer who meets a gay teenager in a New York homeless shelter.",
      "poster_path": "/oWlLj4JZM9qIoH6Cb3Y4943jpEZ.jpg",
    },
    {
      "id": 205601,
      "title": "Belle",
      "release_date": "2013-05-01",
      "original_language": "en",
      "original_title": "Belle",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/bwMxFhvGXUBWjWK64lnWJ9VUhCY.jpg",
      "adult": false,
      "overview": "BELLE is inspired by the true story of Dido Elizabeth Belle, the illegitimate mixed race daughter of a Royal Navy Admiral. Raised by her aristocratic great-uncle Lord Mansfield and his wife, Belle's lineage affords her certain privileges, yet the color of her skin prevents her from fully participating in the traditions of her social standing. Left to wonder if she will ever find love, Belle falls for an idealistic young vicar's son bent on change who, with her help, shapes Lord Mansfield's role as Lord Chief Justice to end slavery in England",
      "poster_path": "/sTOuax6d5f9LDpZ8RvwHvQ88d1N.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/h3pvsU3LSCuiEfqoVay7Ikj6rxc.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 33644,
      "original_language": "en",
      "original_title": "How Stella Got Her Groove Back",
      "overview": "Through good times and bad, Stella and Delilah have always had each other. Now, Stella's so busy building a life that she's forgotten how to really live. But Delilah is about to change all that. What starts as a quick trip to Jamaica, end as an exhilarating voyage of self discovery as Stella learns to open her heart and find love - even if it's with a man 20 years her junior.",
      "poster_path": "/5h7x6EkAyoOdk38UOPV2eZI7GzU.jpg",
      "release_date": "1998-08-14",
      "title": "How Stella Got Her Groove Back",
    },
    {
      "id": 565379,
      "title": "Premature",
      "release_date": "2020-02-21",
      "original_language": "en",
      "original_title": "Premature",
      "genre_ids": [
        18,
        10749
      ],
      "backdrop_path": "/gz8eQ8ysCcHIImHRvLr1mgx6Eot.jpg",
      "adult": false,
      "overview": "The summer before she leaves for college, Ayanna meets handsome and mysterious outsider Isaiah; her entire world is turned upside down as she navigates the demanding terrain of young love against a changing Harlem landscape.",
      "poster_path": "/fBObPsFFSnV7fOAkciYzTXJHEQ5.jpg",
    },
    {
      "overview": "After her fiance is falsely imprisoned, a pregnant African-American woman sets out to clear his name and prove his innocence.",
      "release_date": "2018-12-14",
      "adult": false,
      "backdrop_path": "/ooyvhMsLuwcWBB2HZa4gi4WQF7B.jpg",
      "genre_ids": [
        18,
        10749
      ],
      "id": 465914,
      "original_language": "en",
      "original_title": "If Beale Street Could Talk",
      "poster_path": "/qhUIOTSi3kr4290tKrVyeriyvrv.jpg",
      "title": "If Beale Street Could Talk",
    },
    {
      "overview": "A minister is malevolent and sinister behind his righteous facade. He consorts with, and later extorts from, the owner of a gambling house, and betrays an honest girl, eventually driving them both to ruin.",
      "release_date": "1925-11-09",
      "adult": false,
      "backdrop_path": "/v5B596E3IvllVvIJc3EpJJj0VwM.jpg",
      "title": "Body and Soul",
      "genre_ids": [
        18,
        10749
      ],
      "id": 86955,
      "original_language": "en",
      "original_title": "Body and Soul",
      "poster_path": "/rLPrttxRyYtkcQEGXjsTXp1Glh4.jpg",
    },
    {
      "original_language": "en",
      "original_title": "Within Our Gates",
      "poster_path": "/mv6m7UXxMVQUJuiKY96aOlDtNc1.jpg",
      "overview": "Abandoned by her fiancé, an educated negro woman with a shocking past dedicates herself to helping a near bankrupt school for impoverished negro youths.",
      "id": 77621,
      "title": "Within Our Gates",
      "adult": false,
      "backdrop_path": "/eGhQXfGeNdJfywH6ZmjRwN3f1X8.jpg",
      "release_date": "1920-01-12",
      "genre_ids": [
        18,
        10749
      ],
    },
    {
      "adult": false,
      "backdrop_path": "/2caJqm18xLKMNuBdpz4v4ry0X4F.jpg",
      "genre_ids": [
        18,
        10402
      ],
      "id": 15765,
      "original_language": "en",
      "original_title": "What's Love Got to Do with It",
      "overview": "A film about the singer Tina Turner and how she rose to stardom with her abusive husband Ike Turner and how she gained the courage to break free.",
      "poster_path": "/oFAgqsmjPmwRP4dZqbe51HlpPIi.jpg",
      "release_date": "1993-06-09",
      "title": "What's Love Got to Do with It",
    },
    {
      "adult": false,
      "backdrop_path": "/cauqyUWjhJy8s4uvsxE1r1D1fFz.jpg",
      "genre_ids": [
        18
      ],
      "id": 17978,
      "original_language": "en",
      "original_title": "The Great White Hope",
      "overview": "A black champion boxer and his white female companion struggle to survive while the white boxing establishment looks for ways to knock him down.",
      "poster_path": "/8I97W0YqmclNNnAsVSzNTnQBcjc.jpg",
      "release_date": "1970-10-11",
      "title": "The Great White Hope",
    },
    {
      "adult": false,
      "backdrop_path": "/cTuS5DJWhu1UoZVNJaUjgMNW5h7.jpg",
      "genre_ids": [
        18,
        35,
        36
      ],
      "id": 528888,
      "original_language": "en",
      "original_title": "Dolemite Is My Name",
      "overview": "The story of Rudy Ray Moore, who created the iconic big screen pimp character Dolemite in the 1970s.",
      "poster_path": "/uoAqJg7ZSmftnBGOkupU1ySZQU0.jpg",
      "release_date": "2019-10-04",
      "title": "Dolemite Is My Name",
    },
    {
      "adult": false,
      "backdrop_path": "/dMUb3dDYX60SvGRZXHXAyKK3COC.jpg",
      "genre_ids": [
        18
      ],
      "id": 37754,
      "original_language": "en",
      "original_title": "Cornbread, Earl and Me",
      "overview": "The unintentional shooting by police of a star basketball player has profound personal, political and community repercussions in this acclaimed adaptation of the novel Hog Butcher by Ronald Fair. This was one of the more thoughtful urban dramas produced at the height of the \"blaxploitation\" craze. Also released under the title Hit the Open Man, it features the screen debut of Laurence Fishburne, who was barely a teenager at the time.",
      "poster_path": "/jCPX7opP2FCCCimff7bN8sNNzgb.jpg",
      "release_date": "1975-05-21",
      "title": "Cornbread, Earl and Me",
    },
    {
      "id": 72711,
      "title": "The Interrupters",
      "release_date": "2011-07-29",
      "original_language": "en",
      "original_title": "The Interrupters",
      "genre_ids": [
        99
      ],
      "backdrop_path": "/4HU9GkpeA7ghltK3oYATQnNOA8y.jpg",
      "adult": false,
      "overview": "The Interrupters tells the moving and surprising stories of three Violence Interrupters — former gang members who try to protect their Chicago communities from the violence they once caused.",
      "poster_path": "/y02gUJudManNvLyhI9mpN8DpZt5.jpg",
    },
    {
      "id": 32063,
      "title": "Unforgivable Blackness: The Rise and Fall of Jack Johnson",
      "release_date": "2004-09-04",
      "original_language": "en",
      "original_title": "Unforgivable Blackness: The Rise and Fall of Jack Johnson",
      "genre_ids": [
        99
      ],
      "backdrop_path": "/tt0zJM9SAFDkd6hndBI7lcEmFZi.jpg",
      "adult": false,
      "overview": "The story of Jack Johnson, the first African American Heavyweight boxing champion.",
      "poster_path": "/9A3hG4XsV49t1Cc3QAnBk6bTW5a.jpg",
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 267685,
      "original_language": "en",
      "original_title": "American Revolution 2",
      "overview": "American Revolution 2 begins with footage of the political demonstrations at the 1968 Democratic Convention and the forceful reaction of the Chicago Police Department and the National Guard. Investigating the lack of an African American presence at the protests, the filmmakers follow members of the Chicago chapter of the Black Panther Party as they search for common ground with a variety of white activist groups.  In one scene, Panther Bobby Lee and members of the Young Patriots, a community of white Appalachian activists living in the Uptown neighborhood of Chicago, organize to protest police brutality. The seemingly disparate groups find shared social and political objectives that overcome racial differences – police violence, poverty, lack of employment, and poor living conditions. This potential for a cross-racial and interethnic political movement is the movie’s beautiful but unrealized dream.",
      "poster_path": "/y03qyZJhg3XaTBuK6TDoQEswupJ.jpg",
      "release_date": "1969-01-01",
      "title": "American Revolution 2",
    },
    {
      "adult": false,
      "backdrop_path": "/f1YohZe2PDV5OgTPwNVvRhhV935.jpg",
      "genre_ids": [
        99
      ],
      "id": 124067,
      "original_language": "en",
      "original_title": "The Central Park Five",
      "overview": "In 1989, five black and Latino teenagers from Harlem were arrested and later convicted of raping a white woman in New York City's Central Park. They spent between 6 and 13 years in prison before a serial rapist confessed that he alone had committed the crime, leading to their convictions being overturned. Set against a backdrop of a decaying city beset by violence and racial tension, this is the story of that horrific crime, the rush to judgment by the police, a media clamoring for sensational stories and an outraged public, and the five lives upended by this miscarriage of justice.",
      "poster_path": "/aKlQ8Sjr07OkCLuYkRYtpVSMm3e.jpg",
      "release_date": "2012-05-24",
      "title": "The Central Park Five",
    },
    {
      "id": 566235,
      "title": "Toni Morrison: The Pieces I Am",
      "release_date": "2019-01-27",
      "original_language": "en",
      "original_title": "Toni Morrison: The Pieces I Am",
      "genre_ids": [
        99
      ],
      "backdrop_path": "/uafyedU62WxHtEtS4jnrfj8SipY.jpg",
      "adult": false,
      "overview": "This artful and intimate meditation on the legendary storyteller examines her life, her works, and the powerful themes she has confronted throughout her literary career. Toni Morrison leads an assembly of her peers, critics, and colleagues on an exploration of race, history, the United States, and the human condition.",
      "poster_path": "/37Jjqfap1uV43cQqqn83E49npzS.jpg",
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 208781,
      "original_language": "en",
      "original_title": "Dry Wood",
      "overview": "Featuring the stories and music of seminal Cajun musicians \"Bois Sec\" Ardoin and Canray Fontenot, Dry Wood is a short, vibrant documentary portrait of life, food, music and festivity in the Louisiana Delta from the singular Les Blank.",
      "poster_path": null,
      "release_date": "1973-10-01",
      "title": "Dry Wood",
    },
    {
      "id": 83232,
      "title": "Portrait of Jason",
      "release_date": "1967-09-29",
      "original_language": "en",
      "original_title": "Portrait of Jason",
      "genre_ids": [
        99
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Interview with Jason Holliday aka Aaron Payne. House-boy, would-be cabaret performer, and self-proclaimed hustler giving one man's gin-soaked, pill-popped view of what it was like to be coloured and gay in 1960s Unites States.",
      "poster_path": "/vxYaclAP985krSCYiqIMJ0tsbGg.jpg",
    },
    {
      "original_language": "en",
      "original_title": "Rize",
      "poster_path": "/bx7UAcyumQZuNj3dZFK7Wh4dbRl.jpg",
      "overview": "A documentary film that highlights two street derived dance styles, Clowning and Krumping, that came out of the low income neighborhoods of L.A.. Director David LaChapelle interviews each dance crew about how their unique dances evolved. A new and positive activity away from the drugs, guns, and gangs that ruled their neighborhood. A raw film about a growing sub-culture movements in America.",
      "id": 2287,
      "title": "Rize",
      "adult": false,
      "backdrop_path": null,
      "release_date": "2005-01-15",
      "genre_ids": [
        99
      ],
    },
    {
      "adult": false,
      "backdrop_path": "/deOstkfYizaEBHqLc2p44v1bEay.jpg",
      "genre_ids": [
        99
      ],
      "id": 491052,
      "original_language": "en",
      "original_title": "The Gospel According to André",
      "overview": "From the segregated American South to the fashion capitals of the world, operatic fashion editor André Leon Talley's life and career are on full display, in a poignant portrait that includes appearances by Anna Wintour, Marc Jacobs, Tom Ford, Bethann Hardison, Valentino, and Manolo Blahnik.",
      "poster_path": "/d0rDkNZ7gtwgI3jhwH57qDw7XH4.jpg",
      "release_date": "2018-03-18",
      "title": "The Gospel According to André",
    },
    {
      "id": 250705,
      "title": "Finding Fela",
      "release_date": "2014-08-01",
      "original_language": "en",
      "original_title": "Finding Fela",
      "genre_ids": [
        99,
        10402
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Fela Anikulapo Kuti created the musical movement Afrobeat and used it as a political forum to oppose the Nigerian dictatorship and advocate for the rights of oppressed people. This is the story of his life, music, and political importance.",
      "poster_path": "/ygKFVAzFVej37PF2H7w9ERPIwGt.jpg",
    },
    {
      "adult": false,
      "backdrop_path": "/h0mdfd70SIm2F13aWitdDYAEg4m.jpg",
      "genre_ids": [
        10402,
        99
      ],
      "id": 470831,
      "original_language": "en",
      "original_title": "Grace Jones: Bloodlight and Bami",
      "overview": "A documentary which traces the life of the magnetic, world-conquering, Jamaican musician, model and party queen Grace Jones.",
      "poster_path": "/2ui0HxKINUwmEfYpuUGP7GeoiQd.jpg",
      "release_date": "2017-10-25",
      "title": "Grace Jones: Bloodlight and Bami",
    },
    {
      "id": 553646,
      "title": "ReMastered: The Two Killings of Sam Cooke",
      "release_date": "2019-02-08",
      "original_language": "en",
      "original_title": "ReMastered: The Two Killings of Sam Cooke",
      "genre_ids": [
        99
      ],
      "backdrop_path": "/ghxfjssPN6ybbbwdq07nPeF9UyK.jpg",
      "adult": false,
      "overview": "This investigation examines the mysterious shooting of soul icon Sam Cooke, whose death silenced one of the most vital voices in the civil rights movement.",
      "poster_path": "/8hZd9TquyZp0TralTUh2zangZ0O.jpg",
    },
    {
      "id": 124019,
      "title": "A Well Spent Life",
      "release_date": "1971-03-11",
      "original_language": "en",
      "original_title": "A Well Spent Life",
      "genre_ids": [
        99,
        10402
      ],
      "backdrop_path": "/ssq8bxHS1sKYUIcUmqREY7TbIUw.jpg",
      "adult": false,
      "overview": "A tribute to the Texas songster, Mance Lipscomb, considered by many to be the greatest guitarist of all time.",
      "poster_path": "/yBbLB4ntcod8EFack9aVCDjUf0z.jpg",
    },
    {
      "overview": "Hushpuppy, an intrepid six-year-old girl, lives with her father, Wink in 'the Bathtub', a southern Delta community at the edge of the world. Wink’s tough love prepares her for the unraveling of the universe—for a time when he’s no longer there to protect her. When Wink contracts a mysterious illness, nature flies out of whack—temperatures rise, and the ice caps melt, unleashing an army of prehistoric creatures called aurochs. With the waters rising, the aurochs coming, and Wink’s health fading, Hushpuppy goes in search of her lost mother.",
      "release_date": "2012-06-29",
      "adult": false,
      "backdrop_path": "/jIspFFvZYIzwMM1300r73f3ZoXf.jpg",
      "genre_ids": [
        18
      ],
      "id": 84175,
      "original_language": "en",
      "original_title": "Beasts of the Southern Wild",
      "poster_path": "/nQJmWekGYlXhezGUb21xFfEfwhH.jpg",
      "title": "Beasts of the Southern Wild",
    },
    {
      "genre_ids": [
        27,
        53
      ],
      "original_language": "en",
      "original_title": "Night of the Living Dead",
      "poster_path": "/rSBkU4g4uvZQIMOSpvrmvR4VwhA.jpg",
      "title": "Night of the Living Dead",
      "overview": "A group of people try to survive an attack of bloodthirsty zombies while trapped in a rural Pennsylvania farmhouse.",
      "release_date": "1968-10-04",
      "id": 10331,
      "adult": false,
      "backdrop_path": "/msPUiG0tIVPcLblsCs43yRKEdBr.jpg",
    }
  ]

  export default movieData;
