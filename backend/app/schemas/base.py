from pydantic import BaseModel, ConfigDict


class BaseSchema(BaseModel):
    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        alias_generator=lambda x: "".join(
            word.capitalize() if i > 0 else word for i, word in enumerate(x.split("_"))
        ),
    )
