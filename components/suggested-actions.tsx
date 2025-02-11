'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChatRequestOptions, CreateMessage, Message } from 'ai';
import { memo } from 'react';

interface SuggestedActionsProps {
  chatId: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
}

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: 'What is salvation?',
      label: 'and how can I receive it through Jesus Christ?',
      action: 'What is salvation and how can I receive it through Jesus Christ?',
    },
    {
      title: 'How can I repent',
      label: 'and be forgiven for my sins?',
      action: 'How can I repent and be forgiven for my sins?',
    },
    {
      title: 'What does it mean to be born again',
      label: 'and how do I experience a new life in Christ?',
      action: 'What does it mean to be born again and how do I experience a new life in Christ?',
    },
    {
      title: 'How do I give my life',
      label: 'to Jesus and follow Him?',
      action: 'How do I give my life to Jesus and follow Him?',
    },
    {
      title: 'About Us',
      label: 'Who is Christian Missionary Fellowship International?',
      action: 'About Us - Who is Christian Missionary Fellowship International?',
    },
  ];


  return (
    <div className="grid sm:grid-cols-2 gap-2 w-full">
      {suggestedActions.map((suggestedAction, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.05 * index }}
          key={`suggested-action-${suggestedAction.title}-${index}`}
          className={index > 1 ? 'hidden sm:block' : 'block'}
        >
          <Button
            variant="ghost"
            onClick={async () => {
              window.history.replaceState({}, '', `/chat/${chatId}`);

              append({
                role: 'user',
                content: suggestedAction.action,
              });
            }}
            className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start"
          >
            <span className="font-medium">{suggestedAction.title}</span>
            <span className="text-muted-foreground">
              {suggestedAction.label}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);
