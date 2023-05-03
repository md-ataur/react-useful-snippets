import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const MultipleSelect = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [portfolioTypes, setPortfolioTypes] = useState([]);
    const [topics, setTopics] = useState([]);
    const [topicNames, setTopicNames] = useState([]);
    const [serviceData, setServiceData] = useState({
        title: "",
        topics: [],
    });

    // Portfolio types
    const getData = async () => {
        setIsLoading(true);
        const response = await fetch(`./db.JSON`)
            .then((res) => res.json())
            .then((data) => {
                return data;
            });
        if (response) {
            setPortfolioTypes(response);
            setTopics(response);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    // Handler topic
    const handlerTopic = (id, name) => {
        setServiceData({ ...serviceData, topics: [...serviceData.topics, id] });
        setTopicNames([...topicNames, { id, name }]);
    };

    return (
        <div className="w-full flex flex-col mb-4">
            <label htmlFor="Full name" className="mb-3 text-md font-medium">
                Topic
            </label>
            <div className="border bg-white border-[#C9B9FF] px-2 py-2 rounded-xl min-h-[54px] mb-2 flex flex-wrap md:flex-row gap-y-2">
                {topicNames &&
                    topicNames.map((topic) => (
                        <div
                            key={topic.id}
                            className="flex relative items-center gap-1 bg-gray-200 px-2 py-1 rounded mr-2"
                        >
                            <span className="">{topic.name}</span>
                            <label
                                onClick={() => {
                                    setTopicNames(
                                        topicNames.filter(
                                            (topicName) => topicName.name !== topic.name
                                        )
                                    );
                                    setServiceData({
                                        ...serviceData,
                                        topics: serviceData.topics.filter((id) => id !== topic.id),
                                    });
                                    setTopics([
                                        ...topics,
                                        portfolioTypes.find((t) => topic.id === t.id),
                                    ]);
                                }}
                                className="flex items-center cursor-pointer"
                            >
                                <FiX />
                            </label>
                        </div>
                    ))}
            </div>
            <div>
                {topics &&
                    topics.map((topic) => (
                        <span
                            className="inline-block cursor-pointer border border-gray-400 px-2 py-1 mb-2 rounded mr-2"
                            onClick={() => {
                                handlerTopic(topic?.id, topic?.name);
                                setTopics(topics.filter((t) => topic.id !== t.id));
                            }}
                            key={topic?.id}
                        >
                            {topic?.name}
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default MultipleSelect;
