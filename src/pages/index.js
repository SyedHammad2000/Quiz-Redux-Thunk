"use client";
import {
  Box,
  Button,
  Container,
  ListItem,
  OrderedList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ansQuestion,
  fetchQuestions,
  nextQue,
  resQuiz,
} from "@/store/quizSlice";
import { useState, useEffect } from "react";
// import { useEffect } from "react/cjs/react.development";

// import { useEffect } from "react/cjs/react.production.min"

const quiz = () => {
  const [timer, settimer] = useState(12);
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, status, score } = useSelector(
    (state) => state.quiz
  );
  console.log(questions);
  useEffect(() => {
    if (status === "idle") dispatch(fetchQuestions());
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  const interval = setInterval(() => {
    if (timer > 0) {
      settimer(timer - 1);
    }
  }, 1000);

  clearInterval(interval);

  if (status === "failed") {
    return <Text>{error}</Text>;
  }
  const handleAnswer = (answer) => {
    dispatch(ansQuestion({ questionIndex: currentQuestionIndex, answer }));

    dispatch(nextQue());
  };

  return (
    <Container >
      <Box p="2" width={"30rem"} bgColor={"azure"} rounded={10} shadow={"5px 8px 10px"}>
        <Text p={5} fontSize={20}>
          {`Question:`}
          <br />
          {questions[currentQuestionIndex]?.question}
        </Text>

        <OrderedList p={10}>
          {questions[currentQuestionIndex]?.choice.map((choice, index) => {
            return (
              <ListItem key={index} p={2}>
                <Button
                  // variant={"solid"}
                  colorScheme={"blue"}
                  onClick={() => handleAnswer(choice)}
                >
                  {choice}
                </Button>
              </ListItem>
            );
          })}
        </OrderedList>
        {currentQuestionIndex === questions.length && (
          <Button>
            <Text onClick={() => dispatch(resQuiz())}>Reset</Text>
          </Button>
        )}
      </Box>
      <Box
        bg={"cyan"}
        shadow={"2px 4px 8px"}
        rounded={10}
        m={"auto"}
        width={20}
        height={10}
        mt={5}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontWeight={"bold"} fontSize={20}>
          {score}
        </Text>
      </Box>
    </Container>
  );
};

export default quiz;
