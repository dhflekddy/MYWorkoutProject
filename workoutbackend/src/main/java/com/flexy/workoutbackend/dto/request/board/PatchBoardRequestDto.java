package com.flexy.workoutbackend.dto.request.board;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PatchBoardRequestDto {
    @NotBlank
    private String title;
    @NotBlank
    private String content;
    @NotNull // 빈배열은 있을 수 있지만 해당 필드는 반드시 있어야 함. 그런 의미에서 @NotNull을 붙여준 것입니다.
    private List<String> boardImageList;
}
