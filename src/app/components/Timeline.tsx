"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown as fasChevronDown } from "@fortawesome/free-solid-svg-icons";

export type TimelineData = {
  id: number;
  period: string;
  role: string;
  company: string;
  description: {
    id: number;
    desc: string;
  }[];
};

type TimelineProps = {
  data: TimelineData[];
};

export const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="relative mt-14 after:absolute after:w-px after:bg-gray-500 after:top-0 after:bottom-0 after:left-1/2 after:rounded-full">
      {data.map((item, index) => (
        <CardTimeline key={item.id} data={item} index={index + 1} />
      ))}
    </div>
  );
};

type CardTimelineProps = {
  data: TimelineData;
  index: number;
};

const CardTimeline = ({ data, index }: CardTimelineProps) => {
  const [cardTimelineCollapse, setCardTimelineCollapse] = useState(true);

  return (
    <div
      className={`${index % 2 === 0 ? "left-0" : "left-1/2"} relative w-1/2`}
    >
      <div
        className={`py-1.5 px-4 ${
          index % 2 === 0
            ? "before:right-2 before:border-l-9 after:right-[9.5px] after:border-l-8 after:border-l-white"
            : "before:left-2 before:border-r-9 after:left-[9.5px] after:border-r-8 after:border-r-white"
        }
                  before:absolute before:top-12 before:-translate-y-1/2 before:size-0 before:border-y-9 before:rounded-2xl before:border-y-transparent before:border-r-black
                  after:absolute after:top-12 after:-translate-y-1/2 after:size-0 after:border-y-8 after:border-y-transparent`}
      >
        <p className="mb-0.5 ps-1 text-xs text-gray-600 font-semibold">
          {data.period}
        </p>
        <div className="p-1 border rounded-sm">
          <div className="flex flex-wrap justify-between items-center p-2">
            <div className="basis-4/5 px-1">
              <h3 className="text-xl font-extrabold">{data.role}</h3>
              <p className="text-gray-700">{data.company}</p>
            </div>
            <button
              className={`${
                cardTimelineCollapse ? "pb-0.5" : "pb-0.5 rotate-180"
              }  flex justify-center items-center size-10 rounded-full cursor-pointer hover:bg-gray-100 active:bg-gray-200  transition-all`}
              onClick={() => setCardTimelineCollapse(!cardTimelineCollapse)}
            >
              <i className={`size-5 block`}>
                <FontAwesomeIcon
                  icon={fasChevronDown}
                  className="text-gray-950"
                />
              </i>
            </button>
          </div>
          <ul
            className={`${
              cardTimelineCollapse
                ? "max-h-0 py-0 border-t-0 overflow-hidden"
                : "max-h-[35rem] py-2 border-t"
            } basis-full flex flex-col gap-y-2.5 ps-3.5 pe-2 list-disc text-base/snug text-justify transition-all`}
          >
            {data.description.map((item) => (
              <li key={item.id} className="ms-4">
                {item.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
