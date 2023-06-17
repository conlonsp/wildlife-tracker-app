## Users ##

user1 = User.create({
  username: "noot",
  password: "woofwoof",
  password_confirmation: "woofwoof",
  bio: "I'm a dog and I like balls and swimming.",
  avatar_url: "https://cache.lovethispic.com/uploaded_images/blogs/10-Beautiful-Nature-Scenes-And-Landscapes-48771-6.jpeg"
})

user2 = User.create({
  username: "sam",
  password: "rawknroll",
  password_confirmation: "rawknroll",
  bio: "I'm a human and I want to rawk.",
  avatar_url: "https://cache.lovethispic.com/uploaded_images/blogs/10-Beautiful-Nature-Scenes-And-Landscapes-48771-9.jpeg"
})

## User_Organizations ##

user_org1 = UserOrganization.create({
  user_id: 1,
  organization_id: 1
})

user_org2 = UserOrganization.create({
  user_id: 1,
  organization_id: 2
})

user_org3 = UserOrganization.create({
  user_id: 2,
  organization_id: 3
})

user_org4 = UserOrganization.create({
  user_id: 2,
  organization_id: 4
})

## Organizations ##

org1 = Organization.create({
  name: "Save the Forests",
  mission: "Our mission is to protect the preexisting forests across the globe, while also replanting trees to recoup the losses sustained through logging ventures.",
  location: "British Colombia, Canada"
})

org2 = Organization.create({
  name: "Save the Rivers",
  mission: "We strive to keep our rivers clean from pollution, and to keep their waters where they belong through education.  We aim to educate people on safe and ethical water diversion practices for agriculture or engineering to increase the longevity of our rivers and their ecosystems.",
  location: "Mississippi, USA"
})

org3 = Organization.create({
  name: "Save the Oceans",
  mission: "Here at Save the Oceans, we aim to educate the masses on overfishing, pollution, ocean acidification and much more and how these things affect our oceans.  Our planet is compromised of 70% water, where much of those waters is held in our oceans.  To keep us healthy, and the lives of many othe plants and animals across the globe, we need to prioritize our Ocean's health.",
  location: "Maldives"
})

org4 = Organization.create({
  name: "Save the Bees",
  mission: "We want to save all of the bees that we can because they're pretty cool and we like them a lot and need them to stay.  That's why.",
  location: "Great Plains, USA"
})

org5 = Organization.create({
  name: "Save the Polar Bears",
  mission: "We want to save all of the polar bears that we can because they're pretty cool and we like them a lot and need them to stay.  That's why.",
  location: "Antartica"
})

org6 = Organization.create({
  name: "Guardians of Earth",
  mission: "Guarding the Earth day and night can get pretty tiresome but somebody has to do it.  Why don't you come along and help us?",
  location: "Space Sector ZX353"
})

org7 = Organization.create({
  name: "Green Machine",
  mission: "Lean, green fighting machine.  That's who we are and that's what we're all about.  Come and get it!",
  location: "Somewhere in the Amazon"
})

org8 = Organization.create({
  name: "Wetland Protectors",
  mission: "We want to preserve every wetland around the world that we can because they're pretty cool and we like them a lot and need them to stay.  That's why.",
  location: "Wetland USA"
})

## Projects ##

proj1 = Project.create({
  name: "Project A",
  description: "This project is unlike any other project and definitely way better.  Donate money to our organization to find out more.",
  location: "111 First Street",
  start_date: "12/20/22",
  end_date: "12/19/23",
  organization_id: 1
})

proj2 = Project.create({
  name: "Project B",
  description: "We know the people at Project A think that they're doing the best work.  But here at Project B, we know where the trouble lies and how to help.  Donate money to our organization to find out more.",
  location: "22 Second Ave",
  start_date: "3/3/20",
  end_date: "2/28/25",
  organization_id: 2
})

proj3 = Project.create({
  name: "Project C",
  description: "This project is a lot like the other project and probably not any better or worse.  Donate money to our organization or don't.  We're just happy to help.",
  location: "3 C St",
  start_date: "5/1/23",
  end_date: "8/1/23",
  organization_id: 3
})

proj4 = Project.create({
  name: "Project D",
  description: "The people at Project C tend to be pretty indifferent towards achieving any goals.  We branched off to help them accomplish their goals",
  location: "40 Dee Drive",
  start_date: "5/5/23",
  end_date: "8/5/23",
  organization_id: 4
})

proj5 = Project.create({
  name: "Project E",
  description: "We help the other projects stay motivated.  Nothing motivates us more than motivation.  Put that on a resume.",
  location: "33 Easy St",
  start_date: "1/1/15",
  end_date: "1/1/25",
  organization_id: 5
})

proj6 = Project.create({
  name: "Project F",
  description: "F is for friends that do stuff together. U is for you and me. N is for anywhere anytime at all here in the deep blue sea",
  location: "Deep blue sea",
  start_date: "Forever",
  end_date: "And Ever",
  organization_id: 6
})

proj7 = Project.create({
  name: "Project G",
  description: "Whoooooaaa we're halfway thheeerrreeeee.  Ooooooooohhhhh we're living on a praaaaayeeeeeeer.",
  location: "Heaven",
  start_date: "2/7/1994",
  end_date: "6/15/23",
  organization_id: 7
})

proj8 = Project.create({
  name: "Project H",
  description: "Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.  Help.",
  location: "Help I'm stuck",
  start_date: "5/2/2000",
  end_date: "Undetermined",
  organization_id: 8
})

proj9 = Project.create({
  name: "Project I",
  description: "I want to help Project H, but they never said where they're located.  All they said was, 'Help I'm stuck.'  How's anyone supposed to help them??",
  location: "Looking for Project H",
  start_date: "5/3/2000",
  end_date: "Undetermined",
  organization_id: 3
})

proj10 = Project.create({
  name: "Project J",
  description: "I think all of these projects are a JOKE.  Have you read any of their statements?  Absolutely ridiculous.  This should be against the law.",
  location: "1427 John Drive",
  start_date: "3/4/2005",
  end_date: "3/3/2025",
  organization_id: 4
})

