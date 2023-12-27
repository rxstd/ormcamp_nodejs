module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "member",
    {
      member_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: "회원고유번호",
      },
      email: {
        type: DataTypes.STRING(100),
        primaryKey: false,
        allowNull: false,
        comment: "사용자메일주소",
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        comment: "사용자비밀번호",
      },
    },
    {
      timestamps: true,
      paranoid: true, //deleteAt 컬럼추가 및 삭제일자 저장, 삭제일자가 존재하면 조회되지 않도록 처리
    }
  );
};
