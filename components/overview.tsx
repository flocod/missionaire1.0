import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <MessageIcon size={32} />
        </p>
        <p className="text-xl font-bold">Christian Missionary Fellowship International (CMFI)</p>
        <p>
          Taking God&apos;s saving love to <strong>250 nations</strong> by 2065 AD. Since 1975, CMFI has been committed to
          spreading the message of God’s saving love worldwide, starting from Yaoundé and expanding to multiple nations.
        </p>
        <p>
          <strong>Our Mission:</strong> We are a community bonded to the Lord Jesus and to one another, reaching out to those who
          have yet to know Him. We are called to make disciples and contribute to God&apos;s global purposes.
        </p>
        {/* <p>
          <strong>Core Values:</strong>
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-sm">
          <li><strong>Christian:</strong> Striving for Christlikeness in all things.</li>
          <li><strong>Missionary:</strong> Raising, training, and sending missionaries.</li>
          <li><strong>Fellowship:</strong> Living in deep communion with the Lord and one another.</li>
          <li><strong>International:</strong> Reaching beyond Cameroon to the ends of the earth.</li>
        </ul> */}
        <p>
          {/* Learn more about our history and ministries by visiting our official page: */}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://cmfi.org"
            target="_blank"
          >
            CMFI Official Website
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};





// import { motion } from 'framer-motion';
// import Link from 'next/link';

// import { MessageIcon, VercelIcon } from './icons';

// export const Overview = () => {
//   return (
//     <motion.div
//       key="overview"
//       className="max-w-3xl mx-auto md:mt-20"
//       initial={{ opacity: 0, scale: 0.98 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.98 }}
//       transition={{ delay: 0.5 }}
//     >
//       <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
//         <p className="flex flex-row justify-center gap-4 items-center">
//           {/* <VercelIcon size={32} />
//           <span>+</span> */}
//           <MessageIcon size={32} />
//         </p>
//         <p>
//           This is an{' '}
//           <Link
//             className="font-medium underline underline-offset-4"
//             href="https://github.com/vercel/ai-chatbot"
//             target="_blank"
//           >
//             open source
//           </Link>{' '}
//           chatbot template built with Next.js and the AI SDK by Vercel. It uses
//           the{' '}
//           <code className="rounded-md bg-muted px-1 py-0.5">streamText</code>{' '}
//           function in the server and the{' '}
//           <code className="rounded-md bg-muted px-1 py-0.5">useChat</code> hook
//           on the client to create a seamless chat experience.
//         </p>
//         <p>
//           You can learn more about the AI SDK by visiting the{' '}
//           <Link
//             className="font-medium underline underline-offset-4"
//             href="https://sdk.vercel.ai/docs"
//             target="_blank"
//           >
//             docs
//           </Link>
//           .
//         </p>
//       </div>
//     </motion.div>
//   );
// };
