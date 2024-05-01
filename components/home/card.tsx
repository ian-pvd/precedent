import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

import styles from "./card.module.css";

export default function Card({
  title,
  description,
  demo,
  large,
}: {
  title: string;
  description: string;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={ large ? styles.cardLarge : styles.card }
    >
      <div className={ styles.demo }>{demo}</div>
      <div className={ styles.wrapper }>
        <h2 className={ styles.title }>
          {title}
        </h2>
        <div className={ styles.content }>
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                  className={ styles.link }
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  {...props}
                  // @ts-ignore (to fix "Received `true` for a non-boolean attribute `inline`." warning)
                  inline="true"
                  className={ styles.code }
                />
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
