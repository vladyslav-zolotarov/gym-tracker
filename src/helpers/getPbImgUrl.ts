type pbImgUrlType = {
  id: string;
  collectionId: string;
  avatar: string;
  thumb?: string;
};

export const getPbImgUrl = ({
  id,
  collectionId,
  avatar,
  thumb,
}: pbImgUrlType) => {
  return `${process.env.PB_TYPEGEN_URL}/api/files/${collectionId}/${id}/${avatar}?thumb=${thumb}`;
};
