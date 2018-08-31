// Sass�̃R���p�C���^�X�N�̃T���v���t�@�C���ł��B

// gulp�v���O�C���̓ǂݍ���
const gulp = require('gulp');
// Sass���R���p�C������v���O�C���̓ǂݍ���
const sass = require('gulp-sass');

// style.scss�̊Ď��^�X�N���쐬����
gulp.task('default', function () {
  // �� style.scss�t�@�C�����Ď�
  gulp.watch('sass/style.scss', function () {
    // style.scss�̍X�V���������ꍇ�̏���

    // style.scss�t�@�C�����擾
    gulp.src('sass/style.scss')
      // Sass�̃R���p�C�������s
      .pipe(sass({
        outputStyle: 'expanded'
      })
      // Sass�̃R���p�C���G���[��\��
      // (���ꂪ�Ȃ��Ǝ����I�Ɏ~�܂��Ă��܂�)
      .on('error', sass.logError))
      // css�t�H���_�[�ȉ��ɕۑ�
      .pipe(gulp.dest('css'));
  });
});
