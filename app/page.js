import Features from '@/app/_components/Features/Features';
import Slider from '@/app/_components/Slider/Slider';

export default function Home() {
  return (
    // <main className='flex min-h-screen flex-col items-center justify-between p-24'>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
    //       src='/next.svg'
    //       alt='Next.js Logo'
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>
    //   <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
    //     <a
    //       href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    //       className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    //       className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    //       className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
    //       className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
    //   facilis labore tempore voluptas, veritatis eum quidem earum? Quo ad
    //   laboriosam consequuntur itaque iure dignissimos sequi debitis corporis
    //   esse, aliquam quas cum nemo consectetur voluptas doloremque perspiciatis?
    //   Nobis magni ducimus eum ipsum, soluta maxime officiis eos laborum neque
    //   error. Eos ullam dolores non, suscipit enim sed qui esse illum! Excepturi,
    //   tempora adipisci. Eveniet hic neque, accusamus, voluptatem porro nisi sit,
    //   delectus ratione ad laborum odit! Nostrum cumque saepe beatae labore ab a,
    //   obcaecati recusandae ea aperiam delectus nobis fuga officia possimus
    //   impedit est odit aspernatur quisquam minus eius magnam error minima. Lorem
    //   ipsum dolor, sit amet consectetur adipisicing elit. Saepe mollitia sunt
    //   repellat iusto alias porro nam illo dolorum magni blanditiis velit non,
    //   dolorem error exercitationem voluptate aspernatur deserunt dignissimos
    //   nisi asperiores doloribus amet labore! Beatae voluptatum totam deserunt,
    //   at repudiandae deleniti minus quaerat aut dolore? Possimus, officiis?
    //   Reiciendis expedita voluptas qui accusantium commodi iste. Molestias omnis
    //   aperiam repellendus dicta labore! Accusantium ipsa explicabo corrupti
    //   cupiditate obcaecati? Cumque maiores aspernatur laudantium eum voluptatem
    //   voluptate ratione facere accusamus eveniet, dolore dolorum ducimus.
    //   Possimus quod autem nulla, iure consectetur debitis facilis. Voluptatem
    //   nostrum enim iste modi delectus blanditiis quod ullam aperiam repellat quo
    //   et atque eos expedita, provident facere, illo quae quasi autem excepturi,
    //   veritatis iure quidem velit voluptatum deleniti. Tenetur quas, dolorem
    //   deserunt animi eveniet nulla sunt. Quos ipsum itaque eveniet provident
    //   vitae eligendi dolor. Velit saepe veritatis similique culpa ut delectus
    //   sapiente ad a consectetur, neque voluptatibus repellendus vero quisquam
    //   dolorem ipsam sint ea voluptas dolorum pariatur, iusto cum, rerum dicta!
    //   Ad error deleniti repudiandae voluptatum veniam placeat dolore itaque,
    //   maiores ipsum, nesciunt exercitationem beatae? Sapiente pariatur eveniet
    //   blanditiis ducimus iure ex in. Doloribus sunt quidem neque facere!
    //   Architecto corporis nisi recusandae, ratione nihil delectus quisquam
    //   suscipit similique accusantium illo atque neque quibusdam sit soluta
    //   perspiciatis, earum ducimus temporibus aliquam praesentium reiciendis
    //   repellat? Obcaecati, accusantium officia natus nam delectus ducimus qui
    //   corporis cupiditate quos perspiciatis itaque rerum nihil, non iure quam
    //   provident! Voluptatum placeat consequatur provident dolores libero
    //   voluptas in assumenda eius tempora, non dicta eos, at neque dolore illo.
    //   Id rerum dolorum, nostrum numquam libero consectetur quos aliquam enim
    //   dicta fugit illo, assumenda officiis sapiente voluptas? Illum blanditiis
    //   ullam, maxime aut dolorem, cupiditate mollitia provident veritatis, labore
    //   reprehenderit tempora porro. Laboriosam maxime dolor quae, velit
    //   blanditiis ex molestiae provident natus suscipit ea quia! Repellat ullam
    //   cum, asperiores cumque quasi consectetur facere suscipit dolore
    //   voluptatibus ipsum eaque sint. Blanditiis, necessitatibus iure nesciunt
    //   corrupti expedita ipsam sequi temporibus pariatur enim voluptatibus culpa
    //   aliquid exercitationem ad soluta in quasi similique nihil earum velit
    //   deleniti vero esse accusantium iste? Dolore magnam iste eligendi alias!
    //   Voluptatum illum voluptate id aliquam cumque earum nemo nihil, ipsa
    //   dolorum commodi a eos labore quidem provident nesciunt itaque nostrum.
    //   Ratione sequi tenetur ea minus inventore, nobis nemo quae voluptatibus
    //   suscipit quas quam corporis repellendus quasi ducimus dolor, ut hic eos
    //   recusandae accusantium placeat a. Laborum ut nemo quidem provident? Esse
    //   placeat deserunt, commodi iste dolor tempora cupiditate ipsam libero
    //   consequuntur vel exercitationem, consectetur quas autem minima, inventore
    //   accusantium amet doloribus animi eaque doloremque facilis eligendi
    //   eveniet. Perspiciatis reiciendis veniam officiis suscipit, repudiandae
    //   modi voluptatem ad laborum, asperiores dicta unde aliquid aspernatur vero
    //   cupiditate dolorum, rem nemo accusamus ab atque! Vel, nulla. Quidem minima
    //   qui repellendus eligendi perferendis earum ullam, cumque quia nisi ipsum
    //   quod sint incidunt natus perspiciatis. Consequatur, explicabo quo aliquid
    //   dignissimos ad veniam in quisquam voluptates possimus ipsa enim, error
    //   quibusdam nulla! Illo dignissimos dolore repudiandae hic voluptatem vel,
    //   odio provident. Accusantium ex officiis ratione minima aliquam recusandae
    //   quasi id vitae, numquam deleniti officia ab. Ratione voluptatem nulla
    //   delectus ipsam cum debitis amet rerum praesentium fugit quibusdam quis
    //   magni vitae error, a odio iusto, repellendus iste non? Dolores culpa
    //   consequuntur eum veritatis quae quasi porro iure atque. Unde expedita
    //   obcaecati, accusantium ullam ipsa, rerum mollitia inventore quia excepturi
    //   delectus culpa ipsum a fuga velit ad doloremque? Quia, quod harum aut
    //   officiis dicta adipisci nemo fuga totam maxime mollitia minima nesciunt
    //   dolorem architecto similique officia eos tenetur facere impedit pariatur
    //   qui? Exercitationem a quod id omnis odio. Corrupti repellat pariatur
    //   mollitia eius tenetur provident vel consectetur at iure ab officia quod,
    //   dolorum reiciendis? Veniam quidem placeat velit tempora fugit ad quo eum
    //   sunt nihil? Ipsum molestias nulla vero praesentium quidem doloribus
    //   possimus magni sint, natus, quam voluptates saepe exercitationem soluta
    //   maxime accusantium rerum iure ipsam est nam. Deserunt at consequuntur
    //   atque doloribus expedita, vero quidem optio nemo rerum, assumenda dolor
    //   rem. Eveniet sint nobis iusto obcaecati a omnis quaerat, alias repellat
    //   similique natus itaque nam laborum, enim fugiat minima? Id ut voluptates
    //   est quia rerum dolorum architecto rem, praesentium in fugiat numquam
    //   sapiente similique et ipsum a soluta at harum omnis, pariatur impedit?
    //   Tenetur voluptates delectus sint facere explicabo, eaque omnis, similique
    //   voluptate ad, nobis nihil rem dolorem voluptatem quod. Aut, assumenda
    //   inventore in cumque, odio odit similique placeat, doloremque ullam
    //   explicabo architecto. Officiis, minima? Dolorem consequatur nobis porro
    //   odit, earum impedit maiores assumenda consectetur nulla sed perferendis
    //   beatae aliquam! Non harum eligendi incidunt. Dolor, totam id assumenda
    //   doloribus exercitationem quidem modi, delectus ea vitae numquam, officia
    //   facilis minus debitis tempore deleniti fugit dolores. Debitis reiciendis
    //   dolor soluta rerum quo dignissimos fuga consectetur, voluptatem possimus.
    //   Odit, dolores modi facilis temporibus dicta optio vitae, praesentium neque
    //   iusto officia error blanditiis ipsa necessitatibus assumenda ea obcaecati
    //   recusandae esse ipsum. Facere voluptas veritatis quia ullam dicta ea
    //   ratione nostrum atque nesciunt voluptatibus, sapiente blanditiis
    //   consequuntur autem quam fugiat. Architecto beatae sunt asperiores
    //   repellat. Nam, facilis itaque amet, sed iusto impedit, aut voluptates
    //   nihil quia asperiores cum veniam. Inventore placeat est voluptate vero,
    //   voluptatum quam assumenda explicabo laboriosam repudiandae omnis dolores
    //   quae eos maiores tenetur veniam velit ullam debitis. Corrupti laboriosam
    //   iure deserunt quia minus, quos aperiam ipsam, non ab temporibus sunt
    //   voluptates ducimus. Animi natus laborum beatae alias sequi totam, officia
    //   nisi, dicta a nulla dolores atque quae, ducimus fugiat libero odio ullam
    //   sint quod adipisci modi suscipit sed eos voluptatibus. Voluptatum deserunt
    //   inventore doloribus molestiae provident magni ab! Optio nulla alias
    //   exercitationem commodi nemo corrupti esse harum atque obcaecati,
    //   blanditiis ab laboriosam sapiente enim laborum corporis debitis? Cum
    //   facilis quas quia, enim, maxime quisquam accusamus inventore quaerat
    //   itaque et totam magni a odio eum vero? Enim, reprehenderit. Blanditiis
    //   sint, iusto assumenda sunt, minus quod nostrum soluta doloremque optio
    //   laborum animi similique a sit omnis impedit nesciunt nulla, maiores
    //   tenetur ad explicabo accusantium ab dicta. Aliquid id accusantium possimus
    //   numquam dicta earum doloremque dolorem laborum debitis ex nesciunt nisi
    //   corporis itaque ipsam dolore ipsa architecto, commodi exercitationem a
    //   voluptatum sapiente, quo nihil cum consequuntur. Inventore non sed ut
    //   cupiditate, quod sint.
    // </main>

    <section className='pb-4'>
      <Slider />
      <Features />
    </section>
  );
}
