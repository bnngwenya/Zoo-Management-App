import birdImage from '../assets/images/Bird.webp'
import camelImage from '../assets/images/Camel.webp'
import lionImage from '../assets/images/Lion.jpg'
import elephantImage from '../assets/images/Elephant.jpg'
import dolphinImage from '../assets/images/Dolphin.jpeg'
import chameleonImage from '../assets/images/Chameleon.webp'
import hedgehogImage from '../assets/images/Hedgehog.jpg'
import foxImage from '../assets/images/Fox.jpg'
import kangarooImage from '../assets/images/Kangaroo.webp'
import pandaImage from '../assets/images/Panda.jpg'
import raccoonImage from '../assets/images/Raccoon.webp'
import zebraImage from '../assets/images/Zebra.webp'


export const animals = [
  {
    id: 1,
    name: 'Simba',
    species: 'Lion',
    category: 'Mammal',
    age: 5,
    habitat: 'Savannah',
    diet: 'Carnivore',
    status: 'Healthy',
    image: lionImage,
    description: 'A majestic male lion, king of the savannah. Simba is known for his impressive mane and powerful roar.',
    funFact: 'A lion\'s roar can be heard from up to 5 miles away!',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 2,
    name: 'Ellie',
    species: 'Elephant',
    category: 'Mammal',
    age: 12,
    habitat: 'Forest',
    diet: 'Herbivore',
    status: 'Healthy',
    image: elephantImage,
    description: 'A gentle giant who loves to play in water. Ellie is the matriarch of the elephant herd.',
    funFact: 'Elephants can recognize themselves in a mirror!',
    conservationStatus: 'Endangered'
  },
  {
    id: 3,
    name: 'Rango',
    species: 'Chameleon',
    category: 'Reptile',
    age: 3,
    habitat: 'Rainforest',
    diet: 'Insectivore',
    status: 'Healthy',
    image: chameleonImage,
    description: 'A colorful chameleon who loves to change colors and catch insects with his long tongue.',
    funFact: 'Chameleons can move their eyes independently in two different directions!',
    conservationStatus: 'Least Concern'
  },
  {
    id: 4,
    name: 'Polly',
    species: 'Wren',
    category: 'Bird',
    age: 8,
    habitat: 'Rainforest',
    diet: 'Omnivore',
    status: 'Recovering',
    image: birdImage,
    description: 'A vibrant macaw who loves to mimic sounds and show off her colorful feathers.',
    funFact: 'Macaws can live up to 50 years in captivity!',
    conservationStatus: 'Endangered'
  },
  {
    id: 5,
    name: 'Splash',
    species: 'Dolphin',
    category: 'Marine',
    age: 6,
    habitat: 'Ocean',
    diet: 'Carnivore',
    status: 'Healthy',
    image: dolphinImage,
    description: 'An energetic dolphin who loves performing acrobatic jumps and interacting with visitors.',
    funFact: 'Dolphins sleep with one eye open!',
    conservationStatus: 'Least Concern'
  },
  {
    id: 6,
    name: 'Spiky',
    species: 'Hedgehog',
    category: 'Mammal',
    age: 2,
    habitat: 'Forest',
    diet: 'Insectivore',
    status: 'Healthy',
    image: hedgehogImage,
    description: 'A curious little hedgehog who loves to explore and curl into a ball when scared.',
    funFact: 'Hedgehogs have about 5,000 spines that last about a year each!',
    conservationStatus: 'Least Concern'
  },
  {
    id: 7,
    name: 'Foxy',
    species: 'Fox',
    category: 'Mammal',
    age: 4,
    habitat: 'Forest',
    diet: 'Omnivore',
    status: 'Healthy',
    image: foxImage,
    description: 'A clever and agile fox who loves to play in the forest.',
    funFact: 'Foxes have whiskers on their legs as well as their face!',
    conservationStatus: 'Least Concern'
  },
  {
    id: 8,
    name: 'Kangakanga',
    species: 'Kangaroo',
    category: 'Mammal',
    age: 4,
    habitat: 'Grassland',
    diet: 'Herbivore',
    status: 'Healthy',
    image: kangarooImage,
    description: 'A playful kangaroo who loves to hop around the grassland.',
    funFact: 'Kangaroos can jump up to 9 feet in a single bound!',
    conservationStatus: 'Least Concern'
  },
    {
    id: 9,
    name: 'Cama',
    species: 'Camel',
    category: 'Mammal',
    age: 4,
    habitat: 'Desert',
    diet: 'Herbivore',
    status: 'Healthy',
    image: camelImage,
    description: 'A playful camel who loves to roam the desert.',
    funFact: 'Camels can go without water for weeks!',
    conservationStatus: 'Least Concern'
  },
  {
    id: 10,
    name: 'Pancho',
    species: 'Panda',
    category: 'Mammal',
    age: 14,
    habitat: 'Wetlands',
    diet: 'Herbivore',
    status: 'Healthy',
    image: pandaImage,
    description: 'A cute panda who loves to eat bamboo and climb trees.',
    funFact: 'Pandas have a pseudo-thumb that helps them grip bamboo!',

    conservationStatus: 'Least Concern'
  },
  {
    id: 11,
    name: 'Racca',
    species: 'Raccoon',
    category: 'Mammal',
    age: 3,
    habitat: 'Forest',
    diet: 'Omnivore',
    status: 'Healthy',
    image: raccoonImage,
    description: 'A curious raccoon who loves to explore and climb trees.',
    funFact: 'Raccoons have a sensitive nose and can detect food underground!',
    conservationStatus: 'Least Concern'
  },
  {
    id: 12,
    name: 'Zebby',
    species: 'Zebra',
    category: 'Mammal',
    age: 3,
    habitat: 'Savanna',
    diet: 'Herbivore',
    status: 'Healthy',
    image: zebraImage,
    description: 'A curious zebra who loves to run in the savanna.',
    funFact: 'Zebras have unique black and white stripes!',
    conservationStatus: 'Least Concern'
  }


]

export const recentActivities = [
  { id: 1, action: 'New animal added', animal: 'Simba', time: '2 hours ago', user: 'Mr Ngwenya' },
  { id: 2, action: 'Health check completed', animal: 'Ellie', time: '5 hours ago', user: 'Dr. Makhabane' },
  { id: 3, action: 'Feeding schedule updated', animal: 'All animals', time: '1 day ago', user: 'Zoo Staff' },
  { id: 4, action: 'Habitat cleaned', animal: 'Rango', time: '1 day ago', user: 'Care Team' },
  { id: 5, action: 'Vaccination given', animal: 'Stripes', time: '3 hours ago', user: 'Dr. Makhabane' },
  { id: 6, action: 'Enrichment activity', animal: 'George', time: '6 hours ago', user: 'Care Team' },
]

export const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
]

export const visitDurations = [
  { value: 30, label: '30 minutes' },
  { value: 60, label: '1 hour' },
  { value: 90, label: '1.5 hours' },
  { value: 120, label: '2 hours' }
]

export const visitPurposes = [
  'General Visit',
  'Educational Tour',
  'Photography Session',
  'Animal Encounter',
  'Behind the Scenes',
  'Special Event'
]