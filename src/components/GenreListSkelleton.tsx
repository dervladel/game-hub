import { HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GenreListSkelleton = () => {
  const listItems = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {listItems.map((li) => (
        <HStack key={li}>
          <SkeletonCircle boxSize={"32px"} />
          <SkeletonText paddingY={"5px"} />
        </HStack>
      ))}
    </>
  );
};

export default GenreListSkelleton;
