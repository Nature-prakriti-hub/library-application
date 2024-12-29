



  import React, { useState } from 'react';
  import { useParams, useNavigate } from 'react-router-dom';
  import './Pagination.css';
  
  const BooksTable = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 8;

    const books = {
      fiction: [
        { id: 1, name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A classic novel that explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Jazz Age or the Roaring Twenties in the United States.', cost: '₹750' },
        { id: 2, name: '1984', author: 'George Orwell', description: 'A dystopian novel that presents a terrifying vision of the future where the government controls every aspect of life, including thoughts. It explores themes of surveillance, censorship, and personal freedom.', cost: '₹850' },
        { id: 3, name: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A novel about racism and injustice in the American South, told through the eyes of Scout Finch, a young girl. The book explores the moral nature of human beings and the impact of prejudice on society.', cost: '₹700' },
        { id: 4, name: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic novel that examines the themes of love, reputation, and class, focusing on the relationship between Elizabeth Bennet and Mr. Darcy. It remains one of the most beloved novels in English literature.', cost: '₹500' },
        { id: 5, name: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'The story of Holden Caulfield, a teenage boy who struggles with depression, alienation, and the loss of innocence. His journey reflects the disillusionment of youth and the quest for self-identity.', cost: '₹600' },
        { id: 6, name: 'Moby-Dick', author: 'Herman Melville', description: 'A complex and layered narrative about Captain Ahab’s obsessive quest to kill the white whale, Moby Dick. The book explores themes of fate, revenge, and the human condition in a world of nature’s cruelty.', cost: '₹950' },
        { id: 7, name: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'A fantasy novel that follows the journey of Bilbo Baggins, a hobbit who sets off on an adventure with a group of dwarves to reclaim their homeland from a dragon. It introduces readers to the world of Middle-earth.', cost: '₹800' },
        { id: 8, name: 'The Chronicles of Narnia', author: 'C.S. Lewis', description: 'A series of seven fantasy novels that tell the story of children who discover a magical land called Narnia. The books are known for their moral and religious allegories, and are widely regarded as classics of children\'s literature.', cost: '₹1200' },
        { id: 9, name: 'Brave New World', author: 'Aldous Huxley', description: 'A dystopian novel set in a future society where technology, mass production, and social engineering dictate every aspect of life. The book critiques the loss of individuality and explores the dangers of totalitarianism.', cost: '₹750' },
        { id: 10, name: 'The Kite Runner', author: 'Khaled Hosseini', description: 'A powerful story of friendship, betrayal, and redemption set in Afghanistan. It follows the life of Amir, who struggles with the consequences of betraying his childhood friend, Hassan, against the backdrop of the country\'s political turmoil.', cost: '₹950' },
        { id: 11, name: 'The Picture of Dorian Gray', author: 'Oscar Wilde', description: 'A novel that explores the themes of vanity, morality, and the consequences of a life lived without conscience. Dorian Gray’s portrait ages instead of him, allowing him to live a life of excess while his image reflects his corrupt soul.', cost: '₹600' },
        { id: 12, name: 'Crime and Punishment', author: 'Fyodor Dostoevsky', description: 'A psychological drama that focuses on the moral dilemmas of Rodion Raskolnikov, a young man who commits a crime and struggles with the guilt and justification for his actions. It delves into themes of suffering, redemption, and moral reckoning.', cost: '₹850' },
        { id: 13, name: 'Wuthering Heights', author: 'Emily Brontë', description: 'A dark and passionate tale of love, obsession, and revenge set on the Yorkshire moors. The novel explores the destructive power of love and the tumultuous relationship between Heathcliff and Catherine Earnshaw.', cost: '₹650' },
        { id: 14, name: 'Jane Eyre', author: 'Charlotte Brontë', description: 'A gothic novel that tells the story of the orphaned Jane Eyre, who becomes a governess at Thornfield Hall. The book explores themes of social class, morality, and the struggle for independence in a repressive society.', cost: '₹750' },
        { id: 15, name: 'Anna Karenina', author: 'Leo Tolstoy', description: 'A tragic novel about love and infidelity, focusing on Anna Karenina’s ill-fated affair with Count Vronsky. The book examines the complexity of human emotions and the consequences of choices on personal and social lives.', cost: '₹900' },
      ],
      programming: [
        { id: 1, name: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', description: 'A guide to writing clean, readable, and maintainable code with practical examples.', cost: '₹800' },
        { id: 2, name: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt & David Thomas', description: 'A classic book that offers practical advice on becoming a better programmer and improving your software development skills.', cost: '₹850' },
        { id: 3, name: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', description: 'The foundational book on design patterns that provides solutions to common problems in object-oriented software design.', cost: '₹950' },
        { id: 4, name: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', description: 'A guide to refactoring legacy code, improving its readability, maintainability, and functionality without changing its behavior.', cost: '₹900' },
        { id: 5, name: 'Introduction to Algorithms', author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein', description: 'A comprehensive textbook covering algorithms, data structures, and problem-solving techniques.', cost: '₹1100' },
        { id: 6, name: 'You Don’t Know JS (Book Series)', author: 'Kyle Simpson', description: 'A series of books that dives deep into JavaScript, exploring its intricacies and helping developers master the language.', cost: '₹750' },
        { id: 7, name: 'JavaScript: The Good Parts', author: 'Douglas Crockford', description: 'This book provides an overview of JavaScript’s best features and teaches you how to write clean and efficient code using the language.', cost: '₹600' },
        { id: 8, name: 'The Mythical Man-Month', author: 'Frederick P. Brooks Jr.', description: 'A collection of essays on software engineering and the human aspects of software development, with a focus on project management.', cost: '₹700' },
        { id: 9, name: 'Code Complete', author: 'Steve McConnell', description: 'A comprehensive guide to software construction that explains best practices, strategies, and techniques for building high-quality code.', cost: '₹950' },
        { id: 10, name: 'The Clean Coder: A Code of Conduct for Professional Programmers', author: 'Robert C. Martin', description: 'A book that discusses the importance of professionalism in software development and offers advice on how to approach coding with discipline.', cost: '₹800' },
        { id: 11, name: 'Head First Design Patterns', author: 'Eric Freeman, Elisabeth Robson', description: 'An engaging and visual introduction to design patterns, showing practical examples for solving common problems in software design.', cost: '₹850' },
        { id: 12, name: 'Eloquent JavaScript', author: 'Marijn Haverbeke', description: 'A modern introduction to programming with JavaScript, focusing on real-world programming concepts and examples.', cost: '₹700' },
        { id: 13, name: 'Python Crash Course', author: 'Eric Matthes', description: 'A hands-on, project-based introduction to Python programming, ideal for beginners looking to get up to speed with the language.', cost: '₹750' },
        { id: 14, name: 'The Art of Computer Programming', author: 'Donald E. Knuth', description: 'A multi-volume work that is widely regarded as the definitive source on algorithms and computer programming theory.', cost: '₹1200' },
        { id: 15, name: 'Learning JavaScript Design Patterns', author: 'Addy Osmani', description: 'A practical guide to writing efficient and maintainable JavaScript code using proven design patterns.', cost: '₹950' }
      ],
      science: [
        { id: 1, name: 'A Brief History of Time', author: 'Stephen Hawking', description: 'A landmark book that explores the nature of space, time, and the universe, written by one of the greatest scientists of our time.', cost: '₹950' },
        { id: 2, name: 'The Selfish Gene', author: 'Richard Dawkins', description: 'An influential book that popularized the gene-centered view of evolution, explaining how natural selection operates at the level of genes.', cost: '₹850' },
        { id: 3, name: 'Cosmos', author: 'Carl Sagan', description: 'An exploration of the universe and our place within it, written by one of the greatest science communicators.', cost: '₹900' },
        { id: 4, name: 'The Gene: An Intimate History', author: 'Siddhartha Mukherjee', description: 'A history of the gene, exploring its role in genetics, inheritance, and the history of science.', cost: '₹800' },
        { id: 5, name: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', description: 'A fascinating exploration of the history of humanity, from the origins of Homo sapiens to modern times.', cost: '₹950' },
        { id: 6, name: 'The Body: A Guide for Occupants', author: 'Bill Bryson', description: 'A humorous and enlightening journey through the human body, explaining its complexities and how it functions.', cost: '₹800' },
        { id: 7, name: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot', description: 'The story of Henrietta Lacks, whose cells were used without her consent to make groundbreaking advances in science and medicine.', cost: '₹850' },
        { id: 8, name: 'The Origin of Species', author: 'Charles Darwin', description: 'Darwin’s seminal work on the theory of evolution by natural selection, which transformed our understanding of life on Earth.', cost: '₹1000' },
        { id: 9, name: 'Astrophysics for People in a Hurry', author: 'Neil deGrasse Tyson', description: 'A concise, accessible introduction to the universe, astrophysics, and the science of space.', cost: '₹750' },
        { id: 10, name: 'The Man Who Mistook His Wife for a Hat', author: 'Oliver Sacks', description: 'A collection of neurological case studies that explore the strange and fascinating ways the brain can malfunction.', cost: '₹700' },
        { id: 11, name: 'Gulp: Adventures on the Alimentary Canal', author: 'Mary Roach', description: 'A humorous and insightful look at the human digestive system, from chewing to excretion.', cost: '₹650' },
        { id: 12, name: 'The Feynman Lectures on Physics', author: 'Richard P. Feynman', description: 'A collection of lectures by the Nobel-winning physicist Richard Feynman, providing an introduction to physics for all audiences.', cost: '₹1200' },
        { id: 13, name: 'The Universe in a Nutshell', author: 'Stephen Hawking', description: 'A follow-up to "A Brief History of Time," this book explores new ideas about space-time, black holes, and the nature of the universe.', cost: '₹950' },
        { id: 14, name: 'Why Does E=mc²?', author: 'Brian Cox & Jeff Forshaw', description: 'A simple yet profound explanation of the equation that changed our understanding of physics.', cost: '₹850' },
        { id: 15, name: 'The Double Helix', author: 'James D. Watson', description: 'A personal account of the discovery of the structure of DNA, one of the greatest scientific achievements of the 20th century.', cost: '₹750' }
      ],
      history: [
        { id: 1, name: 'The Silk Roads: A New History of the World', author: 'Peter Frankopan', description: 'An exploration of the interconnectedness of the ancient world, with a focus on the central role of Asia in world history.', cost: '₹950' },
        { id: 2, name: 'The History of the Ancient World', author: 'Susan Wise Bauer', description: 'A comprehensive survey of the major civilizations and events in ancient history, from the dawn of civilization to the fall of Rome.', cost: '₹900' },
        { id: 3, name: 'Guns, Germs, and Steel: The Fates of Human Societies', author: 'Jared Diamond', description: 'A theory of human history that argues geography and environment shaped the modern world.', cost: '₹950' },
        { id: 4, name: 'The Diary of a Young Girl', author: 'Anne Frank', description: 'The diary of Anne Frank, a Jewish girl who hid from the Nazis during World War II, chronicling her experiences and thoughts.', cost: '₹750' },
        { id: 6, name: 'The Rise and Fall of the Third Reich', author: 'William L. Shirer', description: 'A definitive history of Nazi Germany and its catastrophic impact on Europe and the world.', cost: '₹1200' },
        { id: 7, name: 'The Wright Brothers', author: 'David McCullough', description: 'A biography of Orville and Wilbur Wright, the brothers who pioneered powered flight.', cost: '₹800' },
        { id: 8, name: 'The Second World War', author: 'Winston Churchill', description: 'The definitive six-volume history of World War II, written by the British prime minister who led the country through the war.', cost: '₹1200' },
        { id: 9, name: 'The Age of Revolution', author: 'Eric Hobsbawm', description: 'A book that covers the history of the world from 1789 to 1848, focusing on the French Revolution and the Industrial Revolution.', cost: '₹850' },
        { id: 10, name: 'The Cold War: A New History', author: 'John Lewis Gaddis', description: 'A comprehensive history of the Cold War, offering insights into the political dynamics between the Soviet Union and the United States.', cost: '₹950' },
        { id: 11, name: 'The Story of the World: History for the Classical Child', author: 'Susan Wise Bauer', description: 'A family-friendly history of the world, broken down into easily digestible narratives for children and adults alike.', cost: '₹800' },
        { id: 12, name: 'The Guns of August', author: 'Barbara Tuchman', description: 'A brilliant history of the first month of World War I and the series of mistakes and misunderstandings that led to the war.', cost: '₹900' },
        { id: 13, name: 'The Civil War: A Narrative', author: 'Shelby Foote', description: 'A monumental three-volume history of the American Civil War, regarded as one of the best-written accounts of the conflict.', cost: '₹1200' },
        { id: 14, name: 'The History of the Decline and Fall of the Roman Empire', author: 'Edward Gibbon', description: 'A classic work of history that analyzes the causes behind the fall of the Roman Empire.', cost: '₹1000' },
        { id: 15, name: 'The Histories', author: 'Herodotus', description: 'The founding work of history in Western literature, offering a detailed account of the Greco-Persian Wars and the customs of various ancient civilizations.', cost: '₹850' }
      ],
      travel: [
        { id: 1, name: 'The Art of Travel', author: 'Alain de Botton', description: 'A philosophical exploration of the reasons people travel and how to make the most of the travel experience.', cost: '₹800' },
        { id: 2, name: 'Vagabonding', author: 'Rolf Potts', description: 'A guide to long-term travel, offering practical advice on how to travel independently, economically, and meaningfully.', cost: '₹950' },
        { id: 3, name: 'Into the Wild', author: 'Jon Krakauer', description: 'The story of Chris McCandless, a young man who left his life behind to explore the wilderness, ultimately leading to his tragic death.', cost: '₹850' },
        { id: 4, name: 'On the Road', author: 'Jack Kerouac', description: 'A classic memoir that captures the spirit of the American road trip, exploring themes of freedom, adventure, and self-discovery.', cost: '₹750' },
        { id: 5, name: 'The Geography of Bliss', author: 'Eric Weiner', description: 'A journey to the happiest places on Earth, where the author explores what makes different cultures happy and how people in those places live.', cost: '₹800' },
        { id: 6, name: 'The Road to Little Dribbling', author: 'Bill Bryson', description: 'A humorous and insightful travelogue of Bill Bryson’s journey through Britain, exploring its culture, history, and quirks.', cost: '₹750' },
        { id: 7, name: 'Wild: From Lost to Found on the Pacific Crest Trail', author: 'Cheryl Strayed', description: 'A memoir of a woman’s solo hike on the Pacific Crest Trail, exploring themes of loss, healing, and self-discovery.', cost: '₹850' },
        { id: 8, name: 'A Walk in the Woods', author: 'Bill Bryson', description: 'The story of Bryson’s attempt to hike the Appalachian Trail, filled with humor and insights into nature and life.', cost: '₹750' },
        { id: 9, name: 'The 4-Hour Workweek', author: 'Tim Ferriss', description: 'A guide to how to design a lifestyle of freedom, where travel and remote work become central components of one’s life.', cost: '₹900' },
        { id: 10, name: 'The Alchemist', author: 'Paulo Coelho', description: 'A philosophical novel about the journey of self-discovery and following one’s dreams, with a deep connection to travel and adventure.', cost: '₹750' },
        { id: 11, name: 'In Patagonia', author: 'Bruce Chatwin', description: 'A travel memoir that explores the southernmost region of the Americas, delving into its history, culture, and landscapes.', cost: '₹800' },
        { id: 12, name: 'Lonely Planet: The Travel Book', author: 'Lonely Planet', description: 'A collection of the world’s 500 best travel experiences, showcasing the most beautiful and interesting destinations around the globe.', cost: '₹950' },
        { id: 13, name: 'Eat, Pray, Love', author: 'Elizabeth Gilbert', description: 'A memoir of the author’s journey to self-discovery as she travels to Italy, India, and Indonesia after a divorce.', cost: '₹800' },
        { id: 14, name: 'The Beach', author: 'Alex Garland', description: 'A novel about a young backpacker’s search for a utopian paradise in Thailand, ultimately confronting the dangers of idealism and travel.', cost: '₹750' },
        { id: 15, name: 'Shantaram', author: 'Gregory David Roberts', description: 'A semi-autobiographical novel set in the underworld of Bombay, capturing the story of an Australian fugitive’s adventures in India.', cost: '₹950' }
      ],
      art: [
        { id: 1, name: 'The Story of Art', author: 'E.H. Gombrich', description: 'A comprehensive and accessible introduction to the history of art, exploring major artists, movements, and works of art.', cost: '₹950' },
        { id: 2, name: 'The Art Book', author: 'Phaidon Press', description: 'A visual guide to the world’s most important artists and artworks, providing concise and engaging introductions to each artist.', cost: '₹900' },
        { id: 3, name: 'Ways of Seeing', author: 'John Berger', description: 'A revolutionary work that explores how we perceive art and the impact of context, culture, and society on our understanding of visual images.', cost: '₹850' },
        { id: 4, name: 'The Lives of the Artists', author: 'Giorgio Vasari', description: 'A collection of biographies of prominent Italian artists, providing insight into the Renaissance era and the lives behind the masterpieces.', cost: '₹800' },
        { id: 5, name: 'Art as Therapy', author: 'Alain de Botton & John Armstrong', description: 'An exploration of how art can serve as a tool for personal reflection and emotional well-being, encouraging a deeper connection with art.', cost: '₹850' },
        { id: 6, name: 'The Shock of the New', author: 'Robert Hughes', description: 'An analysis of modern art, highlighting the key movements and figures that shaped the 20th century, such as Cubism, Surrealism, and Abstract Expressionism.', cost: '₹950' },
        { id: 7, name: 'The Art of War', author: 'Sun Tzu', description: 'An ancient Chinese military treatise often applied to strategy, conflict resolution, and leadership, influencing many artists and thinkers.', cost: '₹650' },
        { id: 8, name: 'Drawing on the Right Side of the Brain', author: 'Betty Edwards', description: 'A classic guide to unlocking your artistic potential by understanding the way the brain processes visual information and drawing techniques.', cost: '₹800' },
        { id: 9, name: 'The Painter’s Secret Geometry', author: 'Ralph M. Larmann', description: 'Explores the geometric principles underlying famous works of art, showing how artists have used geometry to create visually harmonious compositions.', cost: '₹900' },
        { id: 10, name: 'The Complete Works of Michelangelo', author: 'Rosalind Moss', description: 'An exhaustive collection of Michelangelo’s works, from his sculptures to paintings and architectural designs, with detailed analysis and insights.', cost: '₹1200' },
        { id: 11, name: 'Art & Fear', author: 'David Bayles & Ted Orland', description: 'A reflective guide that addresses the challenges and fears artists face during their creative journeys, offering encouragement and practical advice.', cost: '₹750' },
        { id: 12, name: 'The Artist’s Way', author: 'Julia Cameron', description: 'A powerful program designed to help individuals recover their creative self-expression, focusing on spirituality and creative blocks.', cost: '₹850' },
        { id: 13, name: 'The Nude: A Study in Ideal Form', author: 'Kenneth Clark', description: 'An analysis of the human figure in art, focusing on how the nude form has been portrayed throughout history and its philosophical implications.', cost: '₹900' },
        { id: 14, name: 'Art of the 20th Century', author: 'Norbert Lynton', description: 'An essential guide to the movements, artists, and events that shaped art in the 20th century, from Modernism to Postmodernism.', cost: '₹1100' },
        { id: 15, name: 'The Art Spirit', author: 'Robert Henri', description: 'A collection of inspirational essays by a renowned teacher of American art, encouraging self-expression and passion in artistic creation.', cost: '₹800' }
      ],
      biography: [
        { id: 1, name: 'The Diary of a Young Girl', author: 'Anne Frank', description: 'The poignant diary of Anne Frank, a Jewish girl who documented her life during the Holocaust as she hid from the Nazis.', cost: '₹750' },
        { id: 2, name: 'Long Walk to Freedom', author: 'Nelson Mandela', description: 'The autobiography of South Africa’s first Black president, detailing his journey from childhood to political activism and imprisonment.', cost: '₹900' },
        { id: 3, name: 'Steve Jobs', author: 'Walter Isaacson', description: 'A biography of the Apple co-founder, exploring his life, innovations, and influence on technology and business.', cost: '₹950' },
        { id: 4, name: 'Becoming', author: 'Michelle Obama', description: 'The memoir of former First Lady Michelle Obama, offering an intimate look at her upbringing, personal challenges, and life in the White House.', cost: '₹800' },
        { id: 5, name: 'The Glass Castle', author: 'Jeannette Walls', description: 'A memoir about the author’s difficult childhood, growing up in poverty with parents who were often neglectful, yet full of love.', cost: '₹850' },
        { id: 6, name: 'Educated', author: 'Tara Westover', description: 'A memoir about a woman who grows up in a strict and abusive family in rural Idaho, escaping to pursue education and self-empowerment.', cost: '₹900' },
        { id: 7, name: 'When Breath Becomes Air', author: 'Paul Kalanithi', description: 'A moving memoir by a neurosurgeon who was diagnosed with terminal cancer, reflecting on his life, death, and the meaning of medicine and humanity.', cost: '₹850' },
        { id: 8, name: 'Alexander Hamilton', author: 'Ron Chernow', description: 'A biography of one of America’s Founding Fathers, exploring his role in the American Revolution and the development of the U.S. government.', cost: '₹950' },
        { id: 9, name: 'The Autobiography of Malcolm X', author: 'Malcolm X & Alex Haley', description: 'The powerful and transformative story of Malcolm X’s life, exploring his conversion to Islam, his activism, and his evolving beliefs.', cost: '₹900' },
        { id: 10, name: 'The Wright Brothers', author: 'David McCullough', description: 'A biography of the Wright brothers, who pioneered powered flight, detailing their lives, challenges, and triumphs.', cost: '₹800' },
        { id: 11, name: 'I Am Malala', author: 'Malala Yousafzai', description: 'The memoir of Malala Yousafzai, a young Pakistani girl who survived an assassination attempt by the Taliban and became an advocate for education.', cost: '₹850' },
        { id: 12, name: 'The Pursuit of Happyness', author: 'Chris Gardner', description: 'The inspiring true story of Chris Gardner’s struggle with homelessness and his journey to becoming a successful entrepreneur.', cost: '₹750' },
        { id: 13, name: 'My Life in France', author: 'Julia Child', description: 'The memoir of Julia Child, detailing her years in France, her passion for food, and her rise to becoming a celebrated chef and author.', cost: '₹900' },
        { id: 14, name: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot', description: 'The story of Henrietta Lacks, whose cells were used without her consent to make groundbreaking advances in science and medicine.', cost: '₹850' },
        { id: 15, name: 'Bossypants', author: 'Tina Fey', description: 'A humorous memoir by comedian Tina Fey, sharing her journey from her childhood to becoming a TV writer, comedian, and pop culture icon.', cost: '₹750' }
      ],
      selfHelp: [
        { id: 1, name: 'The Power of Now', author: 'Eckhart Tolle', description: 'A guide to spiritual awakening that emphasizes living in the present moment and letting go of mental patterns that cause suffering.', cost: '₹850' },
        { id: 2, name: 'Atomic Habits', author: 'James Clear', description: 'A practical guide on how to build good habits and break bad ones, focusing on small, incremental changes that lead to big results.', cost: '₹900' },
        { id: 3, name: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', description: 'A no-nonsense approach to living a better life, focusing on the importance of setting boundaries and embracing failure as part of growth.', cost: '₹800' },
        { id: 4, name: 'You Are a Badass', author: 'Jen Sincero', description: 'A motivational book that encourages readers to tap into their inner power, overcome self-doubt, and create the life they want.', cost: '₹850' },
        { id: 5, name: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', description: 'A classic self-help book offering a principle-centered approach to solving personal and professional problems.', cost: '₹950' },
        { id: 6, name: 'The Four Agreements', author: 'Don Miguel Ruiz', description: 'A guide to personal freedom, based on ancient Toltec wisdom, offering four simple agreements to practice for a more fulfilling life.', cost: '₹750' },
        { id: 7, name: 'Dare to Lead', author: 'Brené Brown', description: 'A guide to leadership that focuses on the power of vulnerability, courage, and empathy in creating a resilient and innovative team.', cost: '₹900' },
        { id: 8, name: 'How to Win Friends and Influence People', author: 'Dale Carnegie', description: 'A timeless classic on building effective relationships, improving communication skills, and influencing others positively.', cost: '₹800' },
        { id: 9, name: 'Think and Grow Rich', author: 'Napoleon Hill', description: 'A motivational book focused on how thinking and mindset can influence wealth, success, and personal achievement.', cost: '₹950' },
        { id: 10, name: 'The Gifts of Imperfection', author: 'Brené Brown', description: 'A guide to embracing your imperfections, letting go of the need for perfection, and living a life of authenticity and connection.', cost: '₹850' },
        { id: 11, name: 'The Magic of Thinking Big', author: 'David J. Schwartz', description: 'A self-help book that emphasizes the power of thinking big, setting high goals, and using positive thinking to overcome challenges.', cost: '₹750' },
        { id: 12, name: 'The Miracle Morning', author: 'Hal Elrod', description: 'A practical guide to transforming your life by creating powerful morning habits that set the tone for a productive and positive day.', cost: '₹800' },
        { id: 13, name: 'Grit: The Power of Passion and Perseverance', author: 'Angela Duckworth', description: 'A book exploring the role of perseverance and passion in achieving long-term goals, with research-backed insights and strategies.', cost: '₹900' },
        { id: 14, name: 'Mindset: The New Psychology of Success', author: 'Carol S. Dweck', description: 'A groundbreaking book on how a fixed versus growth mindset can influence success in various aspects of life, from career to personal relationships.', cost: '₹950' },
        { id: 15, name: 'The 5 AM Club', author: 'Robin Sharma', description: 'A guide to transforming your life by waking up early, setting powerful intentions, and maximizing your mornings for success.', cost: '₹800' }
      ],
      mystery: [
        { id: 1, name: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', description: 'A gripping thriller about a journalist and a hacker who investigate a missing girl, uncovering dark family secrets along the way.', cost: '₹950' },
        { id: 2, name: 'The Silent Patient', author: 'Alex Michaelides', description: 'A psychological thriller about a woman who shoots her husband and then stops speaking, and the psychotherapist who becomes obsessed with uncovering the truth.', cost: '₹900' },
        { id: 3, name: 'Gone Girl', author: 'Gillian Flynn', description: 'A twist-filled thriller about a married couple and the lies and deception surrounding the wife’s disappearance.', cost: '₹950' },
        { id: 4, name: 'Big Little Lies', author: 'Liane Moriarty', description: 'A mystery about three women whose lives unravel as a murder investigation exposes secrets in their seemingly perfect suburban community.', cost: '₹850' },
        { id: 5, name: 'The Woman in the Window', author: 'A.J. Finn', description: 'A psychological thriller about an agoraphobic woman who believes she has witnessed a crime in her neighbor’s house.', cost: '₹800' },
        { id: 6, name: 'The Couple Next Door', author: 'Shari Lapena', description: 'A gripping domestic thriller about a couple whose baby is kidnapped during a dinner party, and the secrets they hide.', cost: '₹850' },
        { id: 7, name: 'And Then There Were None', author: 'Agatha Christie', description: 'One of Christie’s most famous mysteries, where ten strangers are invited to an island and are killed off one by one.', cost: '₹750' },
        { id: 8, name: 'The Reversal', author: 'Michael Connelly', description: 'A legal thriller where a defense attorney is hired to overturn a convicted criminal’s case, but he discovers unexpected complications.', cost: '₹900' },
        { id: 9, name: 'Sharp Objects', author: 'Gillian Flynn', description: 'A psychological thriller about a journalist who returns to her hometown to cover a series of gruesome murders, facing her own dark past.', cost: '₹950' },
        { id: 10, name: 'The Secret History', author: 'Donna Tartt', description: 'A gripping novel about a group of college students whose obsession with ancient Greek culture leads to a murder.', cost: '₹950' },
        { id: 11, name: 'The Girl on the Train', author: 'Paula Hawkins', description: 'A psychological thriller about a woman who is drawn into a missing person’s investigation after witnessing a suspicious event on a train.', cost: '₹850' },
        { id: 12, name: 'In the Woods', author: 'Tana French', description: 'A mystery novel about a detective investigating a young girl’s murder in the woods, uncovering dark connections to his own past.', cost: '₹800' },
        { id: 13, name: 'The No. 1 Ladies’ Detective Agency', author: 'Alexander McCall Smith', description: 'The first in a beloved series about Precious Ramotswe, Botswana’s first female private detective, and her investigations into local mysteries.', cost: '₹850' },
        { id: 14, name: 'Before I Go to Sleep', author: 'S.J. Watson', description: 'A psychological thriller about a woman with amnesia who discovers dark secrets about her past through her diary entries.', cost: '₹800' },
        { id: 15, name: 'The Cuckoo’s Calling', author: 'Robert Galbraith', description: 'A detective novel written by J.K. Rowling under a pseudonym, following a private investigator’s investigation into the apparent suicide of a supermodel.', cost: '₹950' }
      ]
    };
  
    const [categoryBooks, setCategoryBooks] = useState(books[category] || []);
    const [selectedBooks, setSelectedBooks] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
    const totalPages = Math.ceil(categoryBooks.length / booksPerPage);

  
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = categoryBooks.slice(indexOfFirstBook, indexOfLastBook);

    const handleAddToCart = (book) => {
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      const bookIndex = existingCart.findIndex((b) => b.id === book.id);
      if (bookIndex !== -1) {
        existingCart[bookIndex].quantity += 1;
      } else {
        existingCart.push({ ...book, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(existingCart));
      setSelectedBooks(existingCart);
    };
  
    const handleBuyNow = (book) => {
      // Navigate to Cart2 with the selected book
      navigate('/buynow', { state: { selectedBook: book } });
    };
    
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div>
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Books</h2>
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {currentBooks.map((book, index) => (
            <tr key={book.id}>
              <td>{indexOfFirstBook + index + 1}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>{book.cost}</td>
              <td>
                <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
                <button onClick={() => handleBuyNow(book)}>Buy Now</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </div>
    );
  };
  
  export default BooksTable;
  