// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ExampleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("count", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("operator", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ExampleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ExampleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ExampleEntity", id.toString(), this);
    }
  }

  static load(id: string): ExampleEntity | null {
    return changetype<ExampleEntity | null>(store.get("ExampleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class Option extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("underlyingAsset", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Option entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Option must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Option", id.toString(), this);
    }
  }

  static load(id: string): Option | null {
    return changetype<Option | null>(store.get("Option", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get underlyingAsset(): Bytes {
    let value = this.get("underlyingAsset");
    return value!.toBytes();
  }

  set underlyingAsset(value: Bytes) {
    this.set("underlyingAsset", Value.fromBytes(value));
  }

  get exerciseTimestamp(): BigInt | null {
    let value = this.get("exerciseTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set exerciseTimestamp(value: BigInt | null) {
    if (!value) {
      this.unset("exerciseTimestamp");
    } else {
      this.set("exerciseTimestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get expiryTimestamp(): BigInt | null {
    let value = this.get("expiryTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set expiryTimestamp(value: BigInt | null) {
    if (!value) {
      this.unset("expiryTimestamp");
    } else {
      this.set("expiryTimestamp", Value.fromBigInt(<BigInt>value));
    }
  }

  get exerciseAsset(): Bytes | null {
    let value = this.get("exerciseAsset");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set exerciseAsset(value: Bytes | null) {
    if (!value) {
      this.unset("exerciseAsset");
    } else {
      this.set("exerciseAsset", Value.fromBytes(<Bytes>value));
    }
  }

  get underlyingAmount(): BigInt | null {
    let value = this.get("underlyingAmount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set underlyingAmount(value: BigInt | null) {
    if (!value) {
      this.unset("underlyingAmount");
    } else {
      this.set("underlyingAmount", Value.fromBigInt(<BigInt>value));
    }
  }

  get settlementSeed(): BigInt | null {
    let value = this.get("settlementSeed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set settlementSeed(value: BigInt | null) {
    if (!value) {
      this.unset("settlementSeed");
    } else {
      this.set("settlementSeed", Value.fromBigInt(<BigInt>value));
    }
  }

  get exerciseAmount(): BigInt | null {
    let value = this.get("exerciseAmount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set exerciseAmount(value: BigInt | null) {
    if (!value) {
      this.unset("exerciseAmount");
    } else {
      this.set("exerciseAmount", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class Claim extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Claim entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Claim must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Claim", id.toString(), this);
    }
  }

  static load(id: string): Claim | null {
    return changetype<Claim | null>(store.get("Claim", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get option(): BigInt | null {
    let value = this.get("option");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set option(value: BigInt | null) {
    if (!value) {
      this.unset("option");
    } else {
      this.set("option", Value.fromBigInt(<BigInt>value));
    }
  }

  get amountWritten(): BigInt | null {
    let value = this.get("amountWritten");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountWritten(value: BigInt | null) {
    if (!value) {
      this.unset("amountWritten");
    } else {
      this.set("amountWritten", Value.fromBigInt(<BigInt>value));
    }
  }

  get amountExercised(): BigInt | null {
    let value = this.get("amountExercised");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amountExercised(value: BigInt | null) {
    if (!value) {
      this.unset("amountExercised");
    } else {
      this.set("amountExercised", Value.fromBigInt(<BigInt>value));
    }
  }

  get claimed(): boolean {
    let value = this.get("claimed");
    return value!.toBoolean();
  }

  set claimed(value: boolean) {
    this.set("claimed", Value.fromBoolean(value));
  }
}
